import { CircularProgress } from '@mui/material';
import { useContext, useCallback } from 'react';
import { ArtContext } from '../contexts/ArtProvider';
import Art from "./Art";

export default function ArtList() {
    const { artList, error, loading } = useContext(ArtContext);

    const favouriteArt = useCallback((_id) => {
        //TODO: update to db
        //const newArt = art.map((a) => (a.id === id ? { ...a, isFavourited: !a.isFavourited } : a));
        //setArt(newArt);
    }, []);

    if (loading) return <CircularProgress className='m-40' />;
    if (error) return <pre className="text-red-600">{error.message}</pre>
    if (!artList) return null;

    return <div className='flex flex-wrap justify-center'>
        {artList.map((art) => <Art {...art} key={art._id} onFavourite={favouriteArt} />)}
    </div>

}