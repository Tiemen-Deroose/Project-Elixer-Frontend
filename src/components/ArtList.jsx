import { useContext, useCallback, useMemo } from 'react';
import { ArtContext } from '../contexts/ArtProvider';
import Art from "./Art";

export default function ArtList({ search }) {
    const { artList, error, loading } = useContext(ArtContext);

    const favouriteArt = useCallback((_id) => {
        //TODO: update to db
        //const newArt = art.map((a) => (a.id === id ? { ...a, isFavourited: !a.isFavourited } : a));
        //setArt(newArt);
    }, []);

    const filteredArt = useMemo(() => {
        return artList.filter((a) => {
            if (search.includes('art'))
                return true;

            return Object.entries(a).find(([key, value]) => {
                return (
                    !['_id', 'image_url', 'price'].includes(key)
                    && value.toLowerCase().includes(search)
                )
            });
        });
    }, [artList, search]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <pre className="text-red-600">{error.message}</pre>
    if (!artList) return null;

    return <div className='flex flex-wrap'>
        {filteredArt.map((art) => <Art {...art} key={art._id} onFavourite={favouriteArt} />)}
    </div>

}