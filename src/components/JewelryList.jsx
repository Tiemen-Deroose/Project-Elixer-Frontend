import { CircularProgress } from '@mui/material';
import { useContext, useCallback } from 'react';
import { JewelryContext } from '../contexts/JewelryProvider';
import Jewelry from "./Jewelry";

export default function JewelryList() {
  const { jewelryList, error, loading } = useContext(JewelryContext);

  const favouriteJewelry = useCallback((_id) => {
    //TODO: update to db
    //const newArt = art.map((a) => (a.id === id ? { ...a, isFavourited: !a.isFavourited } : a));
    //setArt(newArt);
  }, []);

  if (loading) return <CircularProgress className='m-40' />;
  if (error) return <pre className="text-red-600">{error.message}</pre>
  if (!jewelryList) return null;

  return <div className='flex flex-wrap justify-center'>
    {jewelryList.map((jewelry) => <Jewelry {...jewelry} key={jewelry._id} onFavourite={favouriteJewelry} />)}
  </div>
}