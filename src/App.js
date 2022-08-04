import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './App.css';
import AddArtForm from './components/AddArtForm'
import AddJewelryForm from './components/AddJewelryForm';
import ArtList from './components/ArtList';
import JewelryList from './components/JewelryList';
import { ArtProvider } from './contexts/ArtProvider';
import { JewelryProvider } from './contexts/JewelryProvider';

function App() {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  
  return (
    <div className="App">
      <div className="m-5 flex">
        <TextField variant="standard" id='text' value={text} onChange={(e) => setText(e.target.value)} />
        <Button variant="contained" onClick={()=>setSearch(text.toLowerCase())}>Search</Button>
		  </div>

      <ArtProvider>
        <ArtList search={search} />
        <AddArtForm />
      </ArtProvider>
      
      <JewelryProvider>
        <JewelryList search={search} />
        <AddJewelryForm />
      </JewelryProvider>

    </div>
  );
}

export default App;