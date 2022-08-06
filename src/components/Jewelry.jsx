import DiamondIcon from '@mui/icons-material/Diamond';
import ConstructionIcon from '@mui/icons-material/Construction';
import PaletteIcon from '@mui/icons-material/Palette';
import EuroIcon from '@mui/icons-material/Euro';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { InputAdornment, IconButton, Card, CardActionArea, CardActions, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Typography, TextField, Dialog, DialogTitle, DialogContent, Button, DialogActions } from '@mui/material';
import { memo, useCallback, useState, useContext } from 'react';
import FavouriteButton from "./FavouriteButton";
import { JewelryContext } from '../contexts/JewelryProvider';

export default memo(function Jewelry({ _id, name, category, material, colour, image_url, price, isFavourited, onFavourite }) {
    const { favouriteJewelry, createOrUpdateJewelry, deleteJewelry } = useContext(JewelryContext);

    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [editedName, setEditedName] = useState(name);
    const [editedCategory, setEditedCategory] = useState(category);
    const [editedMaterial, setEditedMaterial] = useState(material);
    const [editedColour, setEditedColour] = useState(colour);
    const [editedImageUrl, setEditedImageUrl] = useState(image_url);
    const [editedPrice, setEditedPrice] = useState(price);

    const handleFavourite = useCallback(() => {
        favouriteJewelry(_id);
    }, [favouriteJewelry, _id]);

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
    }, [createOrUpdateJewelry, _id, editedName, editedCategory, editedMaterial, editedColour, editedImageUrl, editedPrice]);

    const handleClickEditButton = () => {
        setOpenEditDialog(true);
    };

    return (
        <>
            <Card className='max-w-xs m-6'>
                <CardActionArea href={image_url} target='_blank'>
                    <CardMedia className='h-80'
                        component='img'
                        image={image_url}
                        alt={name}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography variant='h6' align='center'>
                        {name}
                    </Typography>

                </CardContent>
                <CardContent className='minw-max border-t-2 border-b-2 border-black'>
                    <List>
                        <ListItem>
                            <ListItemIcon><DiamondIcon /></ListItemIcon>
                            <ListItemText primary='Category' secondary={category} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><ConstructionIcon /></ListItemIcon>
                            <ListItemText primary='Material' secondary={material} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><PaletteIcon /></ListItemIcon>
                            <ListItemText primary='Colour' secondary={colour} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><EuroIcon /></ListItemIcon>
                            <ListItemText primary={price} />
                        </ListItem>
                    </List>
                </CardContent>
                <CardActions className='flex justify-between'>
                    <FavouriteButton state={isFavourited} onFavourite={() => onFavourite(_id)} />
                    <div>
                        <IconButton color='primary' onClick={handleClickEditButton}><EditIcon fontSize='large' /></IconButton>
                        <IconButton color='error' onClick={handleDelete}><RemoveCircleIcon fontSize='large' /></IconButton>
                    </div>
                </CardActions>
            </Card>

            <Dialog open={openEditDialog} onClose={handleEdit}>
                <DialogTitle>Edit Jewelry</DialogTitle>
                <DialogContent className='space-y-4'>
                    <TextField
                        fullWidth
                        variant="standard"
                        label="Name"
                        id='name'
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />

                    <TextField
                        fullWidth
                        variant="standard"
                        label="Image URL"
                        id='image'
                        value={editedImageUrl}
                        onChange={(e) => setEditedImageUrl(e.target.value)}
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
                    />

                    <TextField
                        fullWidth
                        variant="standard"
                        label="Category"
                        id='category'
                        value={editedCategory}
                        onChange={(e) => setEditedCategory(e.target.value)}
                    />

                    <TextField
                        fullWidth
                        variant="standard"
                        label="Material"
                        id='material'
                        value={editedMaterial}
                        onChange={(e) => setEditedMaterial(e.target.value)}
                    />

                    <TextField
                        fullWidth
                        variant="standard"
                        label="Colour"
                        id='colour'
                        value={editedColour}
                        onChange={(e) => setEditedColour(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEdit}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </>
    );
})