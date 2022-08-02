import { TextField, Button, Autocomplete, InputAdornment } from "@mui/material"
import { useState } from "react";

export default function AddArtForm({ onSubmitArt = (f) => f }) {
    const options = {
        material: [
            { label: 'canvas' },
        ],
        medium: [
            { label: 'acrylic paint' },
            { label: 'resin' },
        ],
        size: [
            { label: 'small' },
            { label: 'medium' },
            { label: 'large' },
        ]
    };

    const [title, setTitle] = useState('');
    const [material, setMaterial] = useState('');
    const [medium, setMedium] = useState('');
    const [size, setSize] = useState(options.size[0].label);
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitArt(title, material, medium, size, imageUrl, price);
        setTitle('');
        setMaterial('');
        setMedium('');
        setSize(options.size[0].label);
        setImageUrl('');
        setPrice('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col w-4/12 m-4 space-y-4'>
                    <h3 className='text-left text-xl'>Art</h3>

                    <TextField
                        fullWidth={false}
                        variant="standard"
                        label="Title"
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                        id='medium'
                        options={options.medium}
                        inputValue={medium}
                        onInputChange={(e, newValue) => setMedium(newValue)}
                        renderInput={(params) => <TextField {...params} label="Medium" variant="standard" />}
                        required
                    />

                    <Autocomplete
                        isOptionEqualToValue={() => { return true }}
                        disablePortal
                        id="size"
                        options={options.size}
                        defaultValue={options.size[0]}
                        inputValue={size}
                        onInputChange={(e, newValue) => setSize(newValue)}
                        renderInput={(params) => <TextField {...params} label="Size" variant="standard" />}
                        required
                    />

                    <Button type="submit" variant="contained">Submit</Button>
                </div>
            </form>
        </>
    );
}

/*
import { FormControl, TextField, Select, MenuItem, InputLabel, Button, Autocomplete } from "@mui/material"
import { useState } from "react";

export default function AddArtForm() {
    const [title, setTitle] = useState('');
    const [material, setMaterial] = useState('');
    const [medium, setMedium] = useState('');
    const [size, setSize] = useState('');
    const [imageurl, setImageUrl] = useState('');
    const [price, setPrice] = useState(0);

    const options = {
        material: [
            { label: 'canvas' },
        ],
        medium: [
            { label: 'acrylic paint' },
            { label: 'resin' },
        ],
        size: [
            { label: 'small' },
            { label: 'medium' },
            { label: 'large' },
        ]
    };
    return (
        <>
            <form>
                <div className='flex flex-col w-4/12 m-4 space-y-4'>
                    <h3 className='text-left text-xl'>Art</h3>

                    <TextField fullWidth={false} variant="standard" label="Title" id='title' required />
                    <TextField variant="standard" label="Image URL" id='image' required />
                    <TextField variant="standard" label="Price" id='price' required />

                    <Autocomplete
                        freeSolo='true'
                        disablePortal
                        id='material'
                        options={options.material}
                        renderInput={(params) => <TextField {...params} label="Material" variant="standard" />}
                    />

                    <Autocomplete
                        freeSolo='true'
                        disablePortal
                        id='medium'
                        options={options.medium}
                        renderInput={(params) => <TextField {...params} label="Medium" variant="standard" />}
                    />

                    <Autocomplete
                        disablePortal
                        id="size"
                        options={options.size}
                        renderInput={(params) => <TextField {...params} label="Size" variant="standard" />}
                    />

                    <Button variant="contained">Submit</Button>
                </div>
            </form>
        </>
    );
}
*/