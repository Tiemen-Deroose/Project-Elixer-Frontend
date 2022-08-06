import { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const JewelryContext = createContext();

export const JewelryProvider = ({ children }) => {
  const [jewelryList, setJewelryList] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  
  const refreshJewelry = useCallback(async () => {
    try {
      setError();
      setLoading(true);
      const { data } = await axios.get(`http://localhost:9000/api/jewelry?limit=10&offset=0`);
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

    const method = _id ? 'put' : 'post';
    const url = `http://localhost:9000/api/jewelry/${_id}`;
    const data = { name, category, material, colour, image_url, price: Number(price) };

    try {
      const { resultJewelry } = await axios({ method, url, data });
      await refreshJewelry();
      return resultJewelry;
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

    const url = `http://localhost:9000/api/jewelry/${_id || ''}`;

    try {
      const { result } = await axios.delete(url);
      await refreshJewelry();
      return result;
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