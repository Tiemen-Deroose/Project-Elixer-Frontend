import React from 'react';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

const chooseEmoji = (state) => {
    return state ? <Favorite fontSize='large' /> : <FavoriteBorder fontSize='large' />;
}

export default function FavouriteButton({ initialState, onFavourite }) {
    const [state, setState] = React.useState(initialState);

    const toggleState = () => {
        setState(!state);
        onFavourite(state); //todo: add id of favourited object to user
    }

    return <IconButton color='error' onClick={toggleState}>
        {chooseEmoji(state)}
    </IconButton>
}