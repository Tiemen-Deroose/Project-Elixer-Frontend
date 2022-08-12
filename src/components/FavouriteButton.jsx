import React, { useCallback } from 'react';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

const chooseEmoji = (state) => {
    return state ? <Favorite fontSize='large' /> : <FavoriteBorder fontSize='large' />;
}

export default function FavouriteButton({ initialState, onFavourite }) {
    const [state, setState] = React.useState(initialState);
    const [disabled, setDisabled] = React.useState(false);

    const disableButton = useCallback(async () => {
        setDisabled(true);
        setTimeout(() => setDisabled(false), 1000);
    }, []);

    const toggleState = useCallback(async () => {
        if (!disabled) {
            disableButton();
            setState(!state);
            onFavourite();
        }
    }, [disableButton, disabled, onFavourite, state]);

    return <IconButton color='error' onClick={toggleState}>
        {chooseEmoji(state)}
    </IconButton>;
}