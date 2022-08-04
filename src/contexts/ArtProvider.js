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
    <ArtContext.Provider value={{ artList, error, loading}} key={'123123'}>
      {children}
    </ArtContext.Provider>
  );
};