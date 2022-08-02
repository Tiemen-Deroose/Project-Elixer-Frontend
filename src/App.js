import { useState } from 'react';
import './App.css';
import AddArtForm from './components/AddArtForm';
import AddJewelryForm from './components/AddJewelryForm';
import ArtList from './components/Art';
import JewelryList from './components/Jewelry';
import { ART_DATA, JEWELRY_DATA } from './data/mock-data';


function App() {
  const [art, setArt] = useState(ART_DATA);
  const [jewelry, setJewelry] = useState(JEWELRY_DATA);

  const favouriteArt = (id) => {
    const newArt = art.map((a) => (a.id === id ? { ...a, isFavourited: !a.isFavourited } : a));
    setArt(newArt);
  }
  const favouriteJewelry = (id) => {
    const newJewelry = jewelry.map((j) => (j.id === id ? { ...j, isFavourited: !j.isFavourited } : j));
    setJewelry(newJewelry);
  }
  const createArt = (title, material, medium, size, image_url, price) => {
    const newArt = [
      {
        id: Date.now(), title, material, medium, size, image_url, price,
      },
      ...art,
    ];
    setArt(newArt);
  }
  const createJewelry = (name, category, material, colour, image_url, price) => {
    const newJewelry = [
      {
        id: Date.now(), name, category, material, colour, image_url, price,
      },
      ...jewelry,
    ];
    setJewelry(newJewelry);
  }
  
  return (
    <div className="App">
      <ArtList artList={art} onFavourite={favouriteArt}/>
      <JewelryList jewelryList={jewelry} onFavourite={favouriteJewelry}/>

      <AddArtForm onSubmitArt={createArt}/>
      <AddJewelryForm onSubmitJewelry={createJewelry}/>
    </div>
  );
}

export default App;