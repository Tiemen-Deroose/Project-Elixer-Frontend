import React, { memo, useCallback, useState, useContext } from 'react';
import { InputAdornment, IconButton, Card, CardActionArea, CardActions, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Typography, TextField, Dialog, DialogTitle, DialogContent, Button, DialogActions } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import ConstructionIcon from '@mui/icons-material/Construction';
import PaletteIcon from '@mui/icons-material/Palette';
import EuroIcon from '@mui/icons-material/Euro';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { JewelryContext } from '../contexts/JewelryProvider';
import { useSession, useFavourite } from '../contexts/AuthProvider';

import FavouriteButton from './FavouriteButton';

export default memo(function Jewelry({ _id, name, category, material, colour, image_url, price }) {
  const { createOrUpdateJewelry, deleteJewelry } = useContext(JewelryContext);
  const { hasFavourite, hasRole } = useSession();
  const favourite = useFavourite();

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedCategory, setEditedCategory] = useState(category);
  const [editedMaterial, setEditedMaterial] = useState(material);
  const [editedColour, setEditedColour] = useState(colour);
  const [editedImageUrl, setEditedImageUrl] = useState(image_url);
  const [editedPrice, setEditedPrice] = useState(price);

  const handleFavourite = useCallback(() => {
    favourite(_id);
  }, [favourite, _id]);

  const handleDelete = useCallback(() => {
    deleteJewelry(_id);
  }, [deleteJewelry, _id]);

  const handleEdit = useCallback(() => {
    createOrUpdateJewelry({
      _id,
      name: editedName,
      category: editedCategory,
      material: editedMaterial,
      colour: editedColour,
      image_url: editedImageUrl,
      price: editedPrice,
    });
    setOpenEditDialog(false);
  }, [
    createOrUpdateJewelry,
    _id,
    editedName,
    editedCategory,
    editedMaterial,
    editedColour,
    editedImageUrl,
    editedPrice,
  ]);

  const handleClickEditButton = () => {
    setOpenEditDialog(true);
  };

  return (
    <>
      <Card className='max-w-xs m-6' data-cy='jewelry'>
        <CardActionArea href={image_url} target='_blank'>
          <CardMedia className='h-80'
            component='img'
            image={image_url}
            alt={name}
            data-cy='jewelry_image'
          />
        </CardActionArea>
        <CardContent>
          <Typography variant='h6' align='center' data-cy='jewelry_name'>
            {name}
          </Typography>

        </CardContent>
        <CardContent className='minw-max border-t-2 border-b-2 border-black'>
          <List>
            <ListItem>
              <ListItemIcon><DiamondIcon /></ListItemIcon>
              <ListItemText primary='Category' secondary={category} data-cy='jewelry_category' />
            </ListItem>
            <ListItem>
              <ListItemIcon><ConstructionIcon /></ListItemIcon>
              <ListItemText primary='Material' secondary={material} data-cy='jewelry_material' />
            </ListItem>
            <ListItem>
              <ListItemIcon><PaletteIcon /></ListItemIcon>
              <ListItemText primary='Colour' secondary={colour} data-cy='jewelry_colour' />
            </ListItem>
            <ListItem>
              <ListItemIcon><EuroIcon /></ListItemIcon>
              <ListItemText primary={price} data-cy='jewelry_price' />
            </ListItem>
          </List>
        </CardContent>
        <CardActions className='flex justify-between'>
          <FavouriteButton initialState={hasFavourite(_id)} onFavourite={() => handleFavourite()} data-cy='jewelry_favourite_button' />
          <div>
            {
              hasRole('admin') ? <>
                <IconButton color='info' onClick={handleClickEditButton}><EditIcon fontSize='large' data-cy='jewelry_edit_button' /></IconButton>
                <IconButton color='error' onClick={handleDelete}><RemoveCircleIcon fontSize='large' data-cy='jewelry_delete_button' /></IconButton>
              </> : <></>
            }
          </div>
        </CardActions>
      </Card>

      <Dialog open={openEditDialog} onClose={handleEdit} data-cy='jewelry_edit_dialog'>
        <DialogTitle>Edit Jewelry</DialogTitle>
        <DialogContent className='space-y-4'>
          <TextField
            fullWidth
            variant="standard"
            label="Name"
            id='name'
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            data-cy='jewelry_edit_name_input'
          />

          <TextField
            fullWidth
            variant="standard"
            label="Image URL"
            id='image'
            value={editedImageUrl}
            onChange={(e) => setEditedImageUrl(e.target.value)}
            data-cy='jewelry_edit_url_input'
          />

          <TextField
            fullWidth
            variant="standard"
            label="Price"
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>,
            }}
            id='price'
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
            data-cy='jewelry_edit_price_input'
          />

          <TextField
            fullWidth
            variant="standard"
            label="Category"
            id='category'
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
            data-cy='jewelry_edit_category_input'
          />

          <TextField
            fullWidth
            variant="standard"
            label="Material"
            id='material'
            value={editedMaterial}
            onChange={(e) => setEditedMaterial(e.target.value)}
            data-cy='jewelry_edit_material_input'
          />

          <TextField
            fullWidth
            variant="standard"
            label="Colour"
            id='colour'
            value={editedColour}
            onChange={(e) => setEditedColour(e.target.value)}
            data-cy='jewelry_edit_colour_input'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEdit} data-cy='jewelry_edit_confirm_button'>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
});