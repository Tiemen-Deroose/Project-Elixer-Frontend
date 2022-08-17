import React, { useState, useCallback } from 'react';
import { Button, TextField } from '@mui/material';

import MixedList from '../components/MixedList';

export default function BrowsePage() {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const handleClear = useCallback(() => {
    setText('');
    setSearch('');
  }, []);

  return <>
    <div className="m-6 space-x-4 flex">
      <TextField variant="standard" id='text' value={text} onChange={(e) => setText(e.target.value)} data-cy='search_input' />
      <Button variant="contained" color='primary' size='small' onClick={() => setSearch(text.toLowerCase())} data-cy='search_button'>Search</Button>
      <Button variant='contained' color='secondary' size='small' onClick={handleClear} data-cy='clear_button'>Clear</Button>
    </div>

    <div className="flex justify-center">
      <MixedList search={search} />
    </div>

  </>;
}