import axios from 'axios';
import config from '../config.json';

export const getAllArt = async () => {
    const { data } = await axios.get(
        `${config.api_url}art`,
        {
            params: {
                limit: 10,
                offset: 0,
            }
        }
    );
    return data;
};

export const saveArt = async ({ 
    _id, 
    title, 
    material, 
    medium, 
    size, 
    image_url, 
    price 
}) => {
    await axios({ 
        method: _id ? 'put' : 'post', 
        url: `${config.api_url}art/${_id || ''}`, 
        data: { title, material, medium, size, image_url, price: Number(price) },
    });
};

export const deleteArt = async (_id) => {
    await axios.delete(`${config.api_url}art/${_id}`);
};