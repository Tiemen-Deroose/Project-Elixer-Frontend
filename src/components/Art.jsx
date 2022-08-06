import PaletteIcon from '@mui/icons-material/Palette';
import BrushIcon from '@mui/icons-material/Brush';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import EuroIcon from '@mui/icons-material/Euro';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { InputAdornment, IconButton, Card, CardActionArea, CardActions, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Typography, TextField, Dialog, DialogTitle, DialogContent, Button, DialogActions } from '@mui/material';
import { memo, useCallback, useState, useContext } from 'react';
import FavouriteButton from "./FavouriteButton";
import { ArtContext } from '../contexts/ArtProvider';

export default memo(function Art({ _id, title, material, medium, size, image_url, price }) {
    const { favouriteArt, createOrUpdateArt, deleteArt } = useContext(ArtContext);

    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedMaterial, setEditedMaterial] = useState(material);
    const [editedMedium, setEditedMedium] = useState(medium);
    const [editedSize, setEditedSize] = useState(size);
    const [editedImageUrl, setEditedImageUrl] = useState(image_url);
    const [editedPrice, setEditedPrice] = useState(price);

    const handleFavourite = useCallback(() => {
        favouriteArt(_id);
    }, [favouriteArt, _id]);

    const handleDelete = useCallback(() => {
        deleteArt(_id);
    }, [deleteArt, _id]);

    const handleEdit = useCallback(() => {
        createOrUpdateArt({
            _id,
            title: editedTitle,
            material: editedMaterial,
            medium: editedMedium,
            size: editedSize,
            image_url: editedImageUrl,
            price: editedPrice,
        });
        setOpenEditDialog(false);
    }, [createOrUpdateArt, _id, editedTitle, editedMaterial, editedMedium, editedSize, editedImageUrl, editedPrice]);

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
                        alt={title}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography variant='h6' align='center'>
                        {title}
                    </Typography>

                </CardContent>
                <CardContent className='minw-max border-t-2 border-b-2 border-black'>
                    <List>
                        <ListItem>
                            <ListItemIcon><PaletteIcon /></ListItemIcon>
                            <ListItemText primary='Medium' secondary={medium} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><BrushIcon /></ListItemIcon>
                            <ListItemText primary='Material' secondary={material} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><AspectRatioIcon /></ListItemIcon>
                            <ListItemText primary='Size' secondary={size} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><EuroIcon /></ListItemIcon>
                            <ListItemText primary={price} />
                        </ListItem>
                    </List>
                </CardContent>
                <CardActions className='flex justify-between'>
                    <FavouriteButton initialState={false} onFavourite={() => handleFavourite()} />
                    <div>
                        <IconButton color='info' onClick={handleClickEditButton}><EditIcon fontSize='large' /></IconButton>
                        <IconButton color='error' onClick={handleDelete}><RemoveCircleIcon fontSize='large' /></IconButton>
                    </div>
                </CardActions>
            </Card>

            <Dialog open={openEditDialog} onClose={handleEdit}>
                <DialogTitle>Edit Art</DialogTitle>
                <DialogContent className='space-y-4'>
                    <TextField
                        fullWidth
                        variant="standard"
                        label="Title"
                        id='title'
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
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
                        label="Material"
                        id='material'
                        value={editedMaterial}
                        onChange={(e) => setEditedMaterial(e.target.value)}
                    />

                    <TextField
                        fullWidth
                        variant="standard"
                        label="Medium"
                        id='medium'
                        value={editedMedium}
                        onChange={(e) => setEditedMedium(e.target.value)}
                    />

                    <TextField
                        fullWidth
                        variant="standard"
                        label="Size"
                        id='size'
                        value={editedSize}
                        onChange={(e) => setEditedSize(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEdit}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </>
    );
})