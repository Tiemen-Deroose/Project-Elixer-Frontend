import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function NotFound() {
    const { pathname } = useLocation();

    return <div className='m-4 space-y-2'>
        <Typography variant='h3'>Page not found</Typography>
        <Typography>Could not find a page at url: {pathname}</Typography>
    </div>
};