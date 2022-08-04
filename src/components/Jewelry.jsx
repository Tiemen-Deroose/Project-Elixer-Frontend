import { memo } from 'react';
import FavouriteButton from "./FavouriteButton";

export default memo(function Jewelry({ _id, name, category, material, colour, image_url, price, isFavourited, onFavourite }) {
    return (
        <div className="bg-green-300 m-4 w-80 border-2 border-black rounded">
            <div>
                <p className="text-xl font-bold m-3">
                    <span className="bg-green-100 px-2 py-1 border-2 rounded-lg border-green-500">{name}</span>
                </p>
                <div className="container">
                    <i><FavouriteButton state={isFavourited} onFavourite={() => onFavourite(_id)} /></i>
                    <img className="border-t-2 border-b-2 border-black" alt={name} src={image_url} />
                </div>
            </div>
            <div className="m-2">
                <p>{colour} {category} made out of {material}</p>
                <p>Sold at €{price}</p>
            </div>
        </div>
    );
})