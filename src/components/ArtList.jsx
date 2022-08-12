import React, { useContext } from 'react';
import { CircularProgress } from '@mui/material';

import { ArtContext } from '../contexts/ArtProvider';

import Art from './Art';
import CreateNewCard from './CreateNewCard';

export default function ArtList() {
  const { artList, error, loading } = useContext(ArtContext);

  if (loading) return <CircularProgress className='m-40' />;
  if (error) return <pre className="text-red-600">{error.message}</pre>;
  if (!artList) return null;

  return <div className='flex flex-wrap grow justify-center'>
    {artList.map((art) => <Art {...art} key={art._id} />)}
    <CreateNewCard formLink='/art/add/' />
  </div>;

}