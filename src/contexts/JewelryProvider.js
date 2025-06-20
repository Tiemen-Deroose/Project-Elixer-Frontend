import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';

import * as jewelryApi from '../api/jewelry';

import { useSession } from './AuthProvider';

export const JewelryContext = createContext();

export const JewelryProvider = ({ children }) => {
  const { ready: authReady } = useSession();
  const [initialLoad, setInitialLoad] = useState(false);
  const [jewelryList, setJewelryList] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const refreshJewelry = useCallback(async () => {
    setError();
    setLoading(true);

    try {
      const data = await jewelryApi.getAllJewelry();
      setJewelryList(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createOrUpdateJewelry = useCallback(async ({ _id, name, category, material, colour, image_url, price }) => {
    setError();
    setLoading(true);

    try {
      await jewelryApi.saveJewelry({ _id, name, category, material, colour, image_url, price });
      await refreshJewelry();
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [refreshJewelry]);

  const deleteJewelry = useCallback(async (_id) => {
    setError();
    setLoading(true);

    try {
      await jewelryApi.deleteJewelry(_id);
      await refreshJewelry();
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [refreshJewelry]);

  useEffect(() => {
    if (authReady && !initialLoad) {
      refreshJewelry();
      setInitialLoad(true);
    }
  }, [authReady, initialLoad, refreshJewelry]);

  const value = useMemo(
    () => ({
      jewelryList,
      error,
      loading,
      createOrUpdateJewelry,
      deleteJewelry,
    }),
    [
      jewelryList,
      error,
      loading,
      createOrUpdateJewelry,
      deleteJewelry,
    ],
  );

  return (
    <JewelryContext.Provider value={value}>
      {children}
    </JewelryContext.Provider>
  );
};