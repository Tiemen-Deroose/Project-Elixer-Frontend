import { Button, Card, InputAdornment, Typography } from "@mui/material"
import { useState, useContext } from "react";
import { JewelryContext } from '../contexts/JewelryProvider';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { required, float, maxDecimals2, positive, url, lengthMax50, lengthMax255 } from './form/ValidationRules'
import { useNavigate } from 'react-router-dom';

export default function AddJewelryForm() {
    const navigate = useNavigate();
    const { createOrUpdateJewelry } = useContext(JewelryContext);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [material, setMaterial] = useState('');
    const [colour, setColour] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = () => {
        createOrUpdateJewelry({ name, category, material, colour, image_url, price });
        navigate('/jewelry');
    }

    return (
        <Card>
            <ValidatorForm onSubmit={handleSubmit}>
                <div className='flex flex-col m-4 space-y-4'>
                    <Typography variant="h5" component="h5">Create new jewelry</Typography>

                    <TextValidator
                        fullWidth
                        variant="standard"
                        label="Name"
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        validators={[required.rule, lengthMax255.rule]}
                        errorMessages={[required.message, lengthMax255.message]}
                        data-cy='jewelry_name_input'
                    />

                    <TextValidator
                        fullWidth
                        variant="standard"
                        label="Image URL"
                        id='image'
                        value={image_url}
                        onChange={(e) => setImageUrl(e.target.value)}
                        validators={[required.rule, url.rule]}
                        errorMessages={[required.message, url.message]}
                        data-cy='jewelry_url_input'
                    />

                    <TextValidator
                        fullWidth
                        variant="standard"
                        label="Price"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                        }}
                        id='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        validators={[required.rule, float.rule, maxDecimals2.rule, positive.rule]}
                        errorMessages={[required.message, float.message, maxDecimals2.message, positive.message]}
                        data-cy='jewelry_price_input'
                    />

                    <TextValidator
                        fullWidth
                        variant="standard"
                        label="Category"
                        id='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        validators={[required.rule, lengthMax50.rule]}
                        errorMessages={[required.message, lengthMax50.message]}
                        data-cy='jewelry_category_input'
                    />

                    <TextValidator
                        fullWidth
                        variant="standard"
                        label="Material"
                        id='material'
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                        validators={[required.rule, lengthMax50.rule]}
                        errorMessages={[required.message, lengthMax50.message]}
                        data-cy='jewelry_material_input'
                    />

                    <TextValidator
                        fullWidth
                        variant="standard"
                        label="Colour"
                        id='colour'
                        value={colour}
                        onChange={(e) => setColour(e.target.value)}
                        validators={[required.rule, lengthMax50.rule]}
                        errorMessages={[required.message, lengthMax50.message]}
                        data-cy='jewelry_colour_input'
                    />

                    <Button type="submit" variant="contained" data-cy='jewelry_submit_button'>Submit</Button>
                </div>
            </ValidatorForm>
        </Card>
    );
}