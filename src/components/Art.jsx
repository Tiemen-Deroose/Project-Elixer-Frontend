import { memo } from 'react';
import FavouriteButton from "./FavouriteButton";

export default memo(function Art({ _id, title, material, medium, size, image_url, price, isFavourited, onFavourite }) {
    return (
        <div className="bg-green-300 m-4 w-80 border-2 border-black rounded">
            <div>
                <p className="text-xl font-bold m-3">
                    <span className="bg-green-100 px-2 py-1 border-2 rounded-lg border-green-500">{title}</span>
                </p>
                <div className="container">
                    <i><FavouriteButton state={isFavourited} onFavourite={() => onFavourite(_id)} /></i>
                    <img className="border-t-2 border-b-2 border-black" alt={title} src={image_url} />
                </div>
            </div>
            <div className="m-2">
                <p>{size} {material} painting made with {medium}</p>
                <p>Sold at €{price}</p>
            </div>
        </div>
    );
})