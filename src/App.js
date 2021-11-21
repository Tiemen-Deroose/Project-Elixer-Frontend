import logo from './logo.svg';
import './App.css';
import Art from './components/Art'
import Jewelry from './components/Jewelry'
import { ART_DATA, JEWELRY_DATA } from './data/mock-data';

function App() {
  return (
    <div className="App">
      {ART_DATA.map((art, index) => <Art {...art} key={index}/>)}
      {JEWELRY_DATA.map((jewelry, index) => <Jewelry {...jewelry} key={index}/>)}
    </div>
  );
}

export default App;