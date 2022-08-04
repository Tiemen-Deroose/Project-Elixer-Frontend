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
      const { data } = await axios.get(
        `http://localhost:9000/api/jewelry?limit=10&offset=0`
      );
      setJewelryList(data.data);
    } catch (error) {
      setError(error)
    } finally{
      setLoading(false);
    }
  }, []);

  useEffect(() => {
      refreshJewelry();
  }, [refreshJewelry]);

  return (
    <JewelryContext.Provider value={{ jewelryList, error, loading}}>
      {children}
    </JewelryContext.Provider>
  );
};