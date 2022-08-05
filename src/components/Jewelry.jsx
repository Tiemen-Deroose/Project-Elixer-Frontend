import DiamondIcon from '@mui/icons-material/Diamond';
import ConstructionIcon from '@mui/icons-material/Construction';
import PaletteIcon from '@mui/icons-material/Palette';
import EuroIcon from '@mui/icons-material/Euro';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { IconButton, Card, CardActionArea, CardActions, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { memo } from 'react';
import FavouriteButton from "./FavouriteButton";

export default memo(function Jewelry({ _id, name, category, material, colour, image_url, price, isFavourited, onFavourite }) {
    return (
        <Card className='max-w-xs m-6'>
            <CardActionArea href={image_url} target='_blank'>
                <CardMedia
                    component='img'
                    height='140'
                    image={image_url}
                    alt={name}
                />
            </CardActionArea>
            <CardContent>
                <Typography variant="h6">
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
                    <IconButton color='primary' onClick={() => console.log('todo: edit')}><EditIcon fontSize='large' /></IconButton>
                    <IconButton color='error' onClick={() => console.log('todo: delete')}><RemoveCircleIcon fontSize='large' /></IconButton>
                </div>
            </CardActions>
        </Card>
    );
})