import React from 'react';
import { FcLike, FcDislike } from "react-icons/fc";

const chooseEmoji = (state) => {
    const size = 42; //14-28-42-56-70 
    return state ? <FcDislike size={size} /> : <FcLike size={size} />;
}

export default function FavouriteButton({ state, onFavourite }) {

    return <div onClick={() => onFavourite()}>
        {chooseEmoji(state)}
    </div>
}