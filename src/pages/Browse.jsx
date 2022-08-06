import { Button, TextField } from "@mui/material";
import { useState } from "react";
import ArtList from "../components/ArtList";
import JewelryList from "../components/JewelryList";
import { ArtProvider } from "../contexts/ArtProvider";
import { JewelryProvider } from "../contexts/JewelryProvider";

export default function Browse() {
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');

    return <>
        <div className="m-6 space-x-4 flex">
            <TextField variant="standard" id='text' value={text} onChange={(e) => setText(e.target.value)} />
            <Button variant="contained" color='secondary' size='small' onClick={() => setSearch(text.toLowerCase())}>Search</Button>
        </div>

        <div className="flex">
            <ArtProvider>
                <ArtList search={search} />
            </ArtProvider>
            <JewelryProvider>
                <JewelryList search={search} />
            </JewelryProvider>
        </div>

    </>
}