import { Button, TextField } from "@mui/material";
import { useState } from "react";
import MixedList from "../components/MixedList";

export default function Browse() {
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');

    return <>
        <div className="m-6 space-x-4 flex">
            <TextField variant="standard" id='text' value={text} onChange={(e) => setText(e.target.value)} data-cy='search-input'/>
            <Button variant="contained" color='primary' size='small' onClick={() => setSearch(text.toLowerCase())} data-cy='search-button'>Search</Button>
            <Button variant='contained' color='secondary' size='small' onClick={() => { setText(''); setSearch(''); }} data-cy='clear-button'>Clear</Button>
        </div>

        <div className="flex justify-center">
            <MixedList search={search} />
        </div>

    </>
}