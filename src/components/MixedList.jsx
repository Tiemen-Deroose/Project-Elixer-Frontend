import React, { useContext, useMemo } from 'react';
import { CircularProgress } from '@mui/material';

import { JewelryContext } from '../contexts/JewelryProvider';
import { ArtContext } from '../contexts/ArtProvider';

import Jewelry from './Jewelry';
import Art from './Art';

export default function MixedList({ search = '' }) {
  const { artList, aError, aLoading } = useContext(ArtContext);
  const { jewelryList, jError, jLoading } = useContext(JewelryContext);

  const filteredList = useMemo(() => {
    let art = [];
    let jewelry = [];

    if (search.includes('art'))
      art = artList;
    else
      art = artList.filter((a) => {
        return Object.entries(a).find(([key, value]) => {
          return (
            !['_id', 'image_url', 'price'].includes(key)
            && value.toLowerCase().includes(search)
          );
        });
      });

    if (search.includes('jewelry'))
      jewelry = jewelryList;
    else
      jewelry = jewelryList.filter((a) => {
        return Object.entries(a).find(([key, value]) => {
          return (
            !['_id', 'image_url', 'price'].includes(key)
            && value.toLowerCase().includes(search)
          );
        });
      });

    return { art, jewelry };
  }, [artList, jewelryList, search]);

  if (aLoading || jLoading) return <CircularProgress className='m-40' />;
  if (aError || jError) return <pre className="text-red-600">Error loading art: {aError.message} \nError loading jewelry: {jError.message}</pre>;
  if (!artList || !jewelryList) return null;

  return <div className='flex flex-wrap justify-center'>
    {filteredList.art.map((art) => <Art {...art} key={art._id} />)}
    {filteredList.jewelry.map((jewelry) => <Jewelry {...jewelry} key={jewelry._id} />)}
  </div>;
}