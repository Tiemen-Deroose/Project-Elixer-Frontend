import React, { useCallback } from 'react';
import { IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const chooseEmoji = (state) => {
  return state ? <Favorite fontSize='large' data-cy='unfavourite_icon' /> : <FavoriteBorder fontSize='large' data-cy='favourite_icon' />;
};

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

  return <IconButton color='error' onClick={toggleState} data-cy='favourite_button'>
    {chooseEmoji(state)}
  </IconButton>;
}