import Jewelry from "./Jewelry";

export default function JewelryList({ jewelryList = [], onFavourite }) {
    return jewelryList.map((jewelry) => <Jewelry {...jewelry} key={jewelry.id} onFavourite={onFavourite} />);
}