import logo from './logo.svg';
import './App.css';
import Art from './components/Art'
import { ART_DATA } from './mock-data';

function App() {
  return (
    <div className="App">
      {ART_DATA.map(art => <Art title={art.title} description={art.description} material={art.material} size={art.size} price={art.price}/>)}
    </div>
  );
}

export default App;
