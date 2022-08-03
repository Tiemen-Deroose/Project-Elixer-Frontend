import Art from "./Art";

export default function ArtList({ artList = [], onFavourite }) {
    return artList.map((art) => <Art {...art} key={art.id} onFavourite={onFavourite} />);
}