import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';

import * as artApi from '../api/art';

import { useSession } from './AuthProvider';

export const ArtContext = createContext();

export const ArtProvider = ({ children }) => {
  const { ready: authReady } = useSession();
  const [initialLoad, setInitialLoad] = useState(false);
  const [artList, setArtList] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const refreshArt = useCallback(async () => {
    setError();
    setLoading(true);

    try {
      const data = await artApi.getAllArt();
      setArtList(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createOrUpdateArt = useCallback(async ({ _id, title, material, medium, size, image_url, price }) => {
    setError();
    setLoading(true);

    try {
      await artApi.saveArt({ _id, title, material, medium, size, image_url, price });
      await refreshArt();
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [refreshArt]);

  const deleteArt = useCallback(async (_id) => {
    setError();
    setLoading(true);

    try {
      await artApi.deleteArt(_id);
      await refreshArt();
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [refreshArt]);

  useEffect(() => {
    if (authReady && !initialLoad) {
      refreshArt();
      setInitialLoad(true);
    }
  }, [authReady, initialLoad, refreshArt]);

  const value = useMemo(
    () => ({
      artList,
      error,
      loading,
      createOrUpdateArt,
      deleteArt,
    }),
    [
      artList,
      error,
      loading,
      createOrUpdateArt,
      deleteArt,
    ],
  );

  return (
    <ArtContext.Provider value={value}>
      {children}
    </ArtContext.Provider>
  );
};