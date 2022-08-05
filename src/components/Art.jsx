import PaletteIcon from '@mui/icons-material/Palette';
import BrushIcon from '@mui/icons-material/Brush';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import EuroIcon from '@mui/icons-material/Euro';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { IconButton, Card, CardActionArea, CardActions, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { memo } from 'react';
import FavouriteButton from "./FavouriteButton";

export default memo(function Art({ _id, title, material, medium, size, image_url, price, isFavourited, onFavourite }) {
    return (
        <Card className='max-w-xs m-6'>
            <CardActionArea href={image_url} target='_blank'>
                <CardMedia
                    component='img'
                    height='140'
                    image={image_url}
                    alt={title}
                />
            </CardActionArea>
            <CardContent>
                <Typography variant="h6">
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
                <FavouriteButton state={isFavourited} onFavourite={() => onFavourite(_id)} />
                <div>
                    <IconButton color='primary' onClick={() => console.log('todo: edit')}><EditIcon fontSize='large' /></IconButton>
                    <IconButton color='error' onClick={() => console.log('todo: delete')}><RemoveCircleIcon fontSize='large' /></IconButton>
                </div>
            </CardActions>
        </Card>
    );
})