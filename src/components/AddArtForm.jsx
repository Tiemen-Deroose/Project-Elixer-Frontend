import { Button, InputAdornment } from "@mui/material"
import { useState, useContext } from "react";
import { ArtContext } from '../contexts/ArtProvider';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { required, float, maxDecimals2, positive, url, lengthMax50, lengthMax255 } from './form/ValidationRules'

export default function AddArtForm() {
    const { createOrUpdateArt } = useContext(ArtContext);
    const [title, setTitle] = useState('');
    const [material, setMaterial] = useState('');
    const [medium, setMedium] = useState('');
    const [size, setSize] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = () => {
        createOrUpdateArt({ title, material, medium, size, image_url, price });
        setTitle('');
        setMaterial('');
        setMedium('');
        setSize('');
        setImageUrl('');
        setPrice('');
    }

    return (
        <>
            <ValidatorForm onSubmit={handleSubmit}>
                <div className='flex flex-col w-4/12 m-4 space-y-4'>
                    <h3 className='text-left text-xl'>Art</h3>

                    <TextValidator
                        fullWidth
                        variant="standard"
                        label="Title"
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        validators={[required.rule, lengthMax255.rule]}
                        errorMessages={[required.message, lengthMax255.message]}
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
                        label="Medium"
                        id='medium'
                        value={medium}
                        onChange={(e) => setMedium(e.target.value)}
                        validators={[required.rule, lengthMax50.rule]}
                        errorMessages={[required.message, lengthMax50.message]}
                    />

                    <TextValidator
                        fullWidth
                        variant="standard"
                        label="Size"
                        id='size'
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        validators={[required.rule, lengthMax50.rule]}
                        errorMessages={[required.message, lengthMax50.rule]}
                    />

                    <Button type="submit" variant="contained">Submit</Button>
                </div>
            </ValidatorForm>
        </>
    );
}