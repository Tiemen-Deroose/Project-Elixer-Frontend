import FavouriteButton from "./FavouriteButton";

const Jewelry = ({ id, name, category, material, colour, image_url, price, isFavourited, onFavourite }) => {
    return (
        <div className="bg-green-300 m-4 w-80 border-2 border-black rounded">
            <div>
                <p className="text-xl font-bold m-3">
                    <span className="bg-green-100 px-2 py-1 border-2 rounded-lg border-green-500">{name}</span>
                </p>
                <FavouriteButton state={isFavourited} onFavourite={() => onFavourite(id)} />
                <img className="border-t-2 border-b-2 border-black" alt={name} src={image_url} />
            </div>
            <div className="m-2">
                <p>{colour} {category} made out of {material}</p>
                <p>Sold at €{price}</p>
            </div>
        </div>
    );
}

export default function JewelryList({ jewelryList = [], onFavourite }) {
    return jewelryList.map((jewelry) => <Jewelry {...jewelry} key={jewelry.id} onFavourite={onFavourite} />);
}