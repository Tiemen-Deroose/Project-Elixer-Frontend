import { Button, TextField } from "@mui/material";
import { useState } from "react";
import ArtList from "../components/ArtList";
import JewelryList from "../components/JewelryList";

export default function Browse() {
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');

    return <>
        <div className="m-6 space-x-4 flex">
            <TextField variant="standard" id='text' value={text} onChange={(e) => setText(e.target.value)} />
            <Button variant="contained" color='primary' size='small' onClick={() => setSearch(text.toLowerCase())}>Search</Button>
            <Button variant='contained' color='secondary' size='small' onClick={() => { setText(''); setSearch(''); }}>Clear</Button>
        </div>

        <div className="flex">
            <ArtList search={search} />
            <JewelryList search={search} />
        </div>

    </>
}