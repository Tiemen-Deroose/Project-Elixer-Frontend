import React from 'react';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

const chooseEmoji = (state) => {
    return state ? <Favorite fontSize='large' /> : <FavoriteBorder fontSize='large' />;
}

export default function FavouriteButton({ state, onFavourite }) {

    return <IconButton color='error' onClick={() => onFavourite()}>
        {chooseEmoji(state)}
    </IconButton>
}