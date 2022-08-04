import { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const ArtContext = createContext();

export const ArtProvider = ({ children }) => {
  const [artList, setArtList] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const createArt = async ({
    title,
    material,
    medium,
    size,
    image_url,
    price,
  }) => {
    setError();
    try {
      const { newArt } = await axios.post('http://localhost:9000/api/art/',
        { title, material, medium, size, image_url, price: Number(price), });
      await refreshArt();
      return newArt;
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };
  
  const refreshArt = useCallback(async () => {
    try {
      setError();
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:9000/api/art?limit=10&offset=0`
      );
      setArtList(data.data);
    } catch (error) {
      setError(error)
    } finally{
      setLoading(false);
    }
  }, []);

  useEffect(() => {
      refreshArt();
  }, [refreshArt]);

  return (
    <ArtContext.Provider value={{ artList, error, loading, createArt}} key={'123123'}>
      {children}
    </ArtContext.Provider>
  );
};