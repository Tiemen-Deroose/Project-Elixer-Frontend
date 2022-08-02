import { TextField, Button, Autocomplete, InputAdornment } from "@mui/material"
import { useState } from "react";

export default function AddJewelryForm({ onSubmitJewelry = (f) => f }) {
    const options = {
        category: [
            { label: 'pendant' },
            { label: 'bracelet' },
        ],
        material: [
            { label: 'steel' },
            { label: 'sterling silver' },
            { label: 'gold' },
        ],
        colour: [
            { label: 'silver' },
            { label: 'gold' },
        ]
    };

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [material, setMaterial] = useState('');
    const [colour, setColour] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col w-4/12 m-4 space-y-4'>
                    <h3 className='text-left text-xl'>Jewelry</h3>

                    <TextField
                        fullWidth={false}
                        variant="standard"
                        label="Name"
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <TextField
                        variant="standard"
                        label="Image URL"
                        id='image'
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                    />

                    <TextField
                        variant="standard"
                        label="Price"
                        type='number'
                        InputProps={{
                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                        }}
                        id='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />

                    <Autocomplete
                        freeSolo={true}
                        disablePortal
                        id='category'
                        options={options.category}
                        inputValue={category}
                        onInputChange={(e, newValue) => setCategory(newValue)}
                        renderInput={(params) => <TextField {...params} label="Category" variant="standard" />}
                        required
                    />

                    <Autocomplete
                        freeSolo={true}
                        disablePortal
                        id='material'
                        options={options.material}
                        inputValue={material}
                        onInputChange={(e, newValue) => setMaterial(newValue)}
                        renderInput={(params) => <TextField {...params} label="Material" variant="standard" />}
                        required
                    />

                    <Autocomplete
                        freeSolo={true}
                        disablePortal
                        id='colour'
                        options={options.colour}
                        inputValue={colour}
                        onInputChange={(e, newValue) => setColour(newValue)}
                        renderInput={(params) => <TextField {...params} label="Colour" variant="standard" />}
                        required
                    />

                    <Button type="submit" variant="contained">Submit</Button>
                </div>
            </form>
        </>
    );
}