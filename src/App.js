import logo from './logo.svg';
import './App.css';
import Art from './components/Art'
import { ART_DATA } from './data/mock-data';

function App() {
  return (
    <div className="App">
      {ART_DATA.map((art, index) => <Art {...art} key={index}/>)}
    </div>
  );
}

export default App;