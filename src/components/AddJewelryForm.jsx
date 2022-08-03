import { TextField, Button, Autocomplete, InputAdornment } from "@mui/material"
import { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { required, float, maxDecimals2, positive, url, lengthMax50, lengthMax255 } from './form/ValidationRules'

export default function AddJewelryForm({ onSubmitJewelry = (f) => f }) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [material, setMaterial] = useState('');
    const [colour, setColour] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = () => {
        onSubmitJewelry(name, category, material, colour, imageUrl, price);
        setName('');
        setCategory('');
        setMaterial('');
        setColour('');
        setImageUrl('');
        setPrice('');
    }

    return (
        <>
            <ValidatorForm onSubmit={handleSubmit}>
                <div className='flex flex-col w-4/12 m-4 space-y-4'>
                    <h3 className='text-left text-xl'>Jewelry</h3>

                    <TextValidator
                        fullWidth
                        variant="standard"
                        label="Name"
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        validators={[required.rule, lengthMax255.rule]}
                        errorMessages={[required.message, lengthMax255.message]}
                    />

                    <TextValidator
                        fullWidth
                        variant="standard"
                        label="Image URL"
                        id='image'
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        validators={[required.rule, url.rule]}
                        errorMessages={[required.message, url.message]}
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
                    />

                    <Button type="submit" variant="contained">Submit</Button>
                </div>
            </ValidatorForm>
        </>
    );
}