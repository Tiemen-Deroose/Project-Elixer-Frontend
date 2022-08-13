import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useSession } from '../contexts/AuthProvider';

export default function CreateNewCard({ formLink }) {
  const { hasRole } = useSession();
  return hasRole('admin') ? <Card className='w-80 h-auto m-6 flex justify-center'>
    <Button component={Link} to={formLink} color='primary' fullWidth data-cy='create_new_button'><AddIcon size='large' /></Button>
  </Card> : <></>;
}