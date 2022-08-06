import { useContext, useCallback, useMemo } from 'react';
import { JewelryContext } from '../contexts/JewelryProvider';
import Jewelry from "./Jewelry";

export default function JewelryList({ search }) {
  const { jewelryList, error, loading } = useContext(JewelryContext);

  const favouriteJewelry = useCallback((_id) => {
    //TODO: update to db
    //const newArt = art.map((a) => (a.id === id ? { ...a, isFavourited: !a.isFavourited } : a));
    //setArt(newArt);
  }, []);

  const filteredJewelry = useMemo(() => {
    return jewelryList.filter((a) => {
      if (search.includes('jewelry'))
        return true;

      return Object.entries(a).find(([key, value]) => {
        return (
          !['_id', 'image_url', 'price'].includes(key)
          && value.toLowerCase().includes(search)
        )
      });
    });
  }, [jewelryList, search]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre className="text-red-600">{error.message}</pre>
  if (!jewelryList) return null;

  return <div className='flex flex-wrap'>
    {filteredJewelry.map((jewelry) => <Jewelry {...jewelry} key={jewelry._id} onFavourite={favouriteJewelry} />)}
  </div>
}