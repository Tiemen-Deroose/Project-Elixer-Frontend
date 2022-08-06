import { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const ArtContext = createContext();

export const ArtProvider = ({ children }) => {
  const [artList, setArtList] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const refreshArt = useCallback(async () => {
    try {
      setError();
      setLoading(true);
      const { data } = await axios.get(`http://localhost:9000/api/art?limit=10&offset=0`);
      setArtList(data.data);
    } catch (error) {
      setError(error)
    } finally{
      setLoading(false);
    }
  }, []);

  const createOrUpdateArt = useCallback(async ({ _id, title, material, medium, size, image_url, price }) => {
    setError();
    setLoading(true);

    const method = _id ? 'put' : 'post';
    const url = `http://localhost:9000/api/art/${_id || ''}`;
    const data = { title, material, medium, size, image_url, price: Number(price) };

    try {
      const { resultArt } = await axios({ method, url, data });
      await refreshArt();
      return resultArt;
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

    const url = `http://localhost:9000/api/art/${_id}`;

    try {
      const { result } = await axios.delete(url);
      await refreshArt();
      return result;
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [refreshArt]);

  useEffect(() => {
      refreshArt();
  }, [refreshArt]);

  return (
    <ArtContext.Provider value={{ artList, error, loading, createOrUpdateArt, deleteArt}}>
      {children}
    </ArtContext.Provider>
  );
};