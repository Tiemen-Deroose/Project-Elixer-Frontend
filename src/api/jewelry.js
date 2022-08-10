import axios from 'axios';
import config from '../config.json';

export const getAllJewelry = async () => {
    const { data } = await axios.get(
        `${config.api_url}jewelry`,
        {
            params: {
                limit: 10,
                offset: 0,
            }
        }
    );
    return data;
};

export const saveJewelry = async ({ 
    _id, 
    name, 
    category, 
    material, 
    colour, 
    image_url, 
    price 
}) => {
    await axios({ 
        method: _id ? 'put' : 'post', 
        url: `${config.api_url}jewelry/${_id || ''}`, 
        data: { name, category, material, colour, image_url, price: Number(price) },
    });
};

export const deleteJewelry = async (_id) => {
    await axios.delete(`${config.api_url}jewelry/${_id}`);
};