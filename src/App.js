import { useState } from 'react';
import './App.css';
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
  
  return (
    <div className="App">
      <ArtList artList={art} onFavourite={favouriteArt}/>
      <JewelryList jewelryList={jewelry} onFavourite={favouriteJewelry}/>
    </div>
  );
}

export default App;