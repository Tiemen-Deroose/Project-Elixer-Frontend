import { createContext, useState, useEffect, useCallback } from 'react';
import * as jewelryApi from '../api/jewelry'

export const JewelryContext = createContext();

export const JewelryProvider = ({ children }) => {
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
      setError(error)
    } finally{
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
      refreshJewelry();
  }, [refreshJewelry]);

  return (
    <JewelryContext.Provider value={{ jewelryList, error, loading, createOrUpdateJewelry, deleteJewelry}}>
      {children}
    </JewelryContext.Provider>
  );
};