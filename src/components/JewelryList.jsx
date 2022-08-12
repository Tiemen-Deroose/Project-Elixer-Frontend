import React, { useContext } from 'react';
import { CircularProgress } from '@mui/material';

import { JewelryContext } from '../contexts/JewelryProvider';

import CreateNewCard from './CreateNewCard';
import Jewelry from './Jewelry';

export default function JewelryList() {
  const { jewelryList, error, loading } = useContext(JewelryContext);

  if (loading) return <CircularProgress className='m-40' />;
  if (error) return <pre className="text-red-600">{error.message}</pre>;
  if (!jewelryList) return null;

  return <div className='flex flex-wrap justify-center'>
    {jewelryList.map((jewelry) => <Jewelry {...jewelry} key={jewelry._id} />)}
    <CreateNewCard formLink='/jewelry/add' />
  </div>;
}