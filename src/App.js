import { Button, TextField } from '@mui/material';
import { useMemo, useState } from 'react';
import './App.css';
import AddArtForm from './components/AddArtForm';
import AddJewelryForm from './components/AddJewelryForm';
import ArtList from './components/ArtList';
import JewelryList from './components/JewelryList';
import { ART_DATA, JEWELRY_DATA } from './data/mock-data';


function App() {
  const [art, setArt] = useState(ART_DATA);
  const [jewelry, setJewelry] = useState(JEWELRY_DATA);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const favouriteArt = (id) => {
    const newArt = art.map((a) => (a.id === id ? { ...a, isFavourited: !a.isFavourited } : a));
    setArt(newArt);
  }
  const favouriteJewelry = (id) => {
    const newJewelry = jewelry.map((j) => (j.id === id ? { ...j, isFavourited: !j.isFavourited } : j));
    setJewelry(newJewelry);
  }
  const createArt = (title, material, medium, size, image_url, price) => {
    setArt([{ id: Date.now(), title, material, medium, size, image_url, price }, ...art, ]);
  }
  const createJewelry = (name, category, material, colour, image_url, price) => {
    setJewelry([{ id: Date.now(), name, category, material, colour, image_url, price }, ...jewelry, ]);
  }
  const filterResults = useMemo(() => {
    const filteredArt = art.filter((a) => {
      if (search.includes('art'))
        return true;

      return Object.entries(a).find(([key, value]) => {
        return (
          !['id','image_url','price'].includes(key)
          && value.toLowerCase().includes(search)
        )
      });
    });
    const filteredJewelry = jewelry.filter((j) => {
      if (search.includes('jewelry'))
        return true;

      return Object.entries(j).find(([key, value]) => {
        return (
          !['id','image_url','price'].includes(key)
          && value.toLowerCase().includes(search)
        )
      });
    });

    return {filteredArt, filteredJewelry};
  }, [art, jewelry, search]);
  
  return (
    <div className="App">
      <div className="m-5 flex">
        <TextField variant="standard" id='text' value={text} onChange={(e) => setText(e.target.value)} />
        <Button variant="contained" onClick={()=>setSearch(text.toLowerCase())}>Search</Button>
		  </div>

      <ArtList artList={filterResults.filteredArt} onFavourite={favouriteArt}/>
      <JewelryList jewelryList={filterResults.filteredJewelry} onFavourite={favouriteJewelry}/>

      <AddArtForm onSubmitArt={createArt}/>
      <AddJewelryForm onSubmitJewelry={createJewelry}/>
    </div>
  );
}

export default App;