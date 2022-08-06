import { createTheme, CssBaseline } from '@mui/material';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Browse from './pages/Browse'
import ArtPage from './pages/ArtPage';
import JewelryPage from './pages/JewelryPage';
import Navbar from './components/NavBar';
import NotFound from './pages/NotFound';

function App() {
  return <>
    <CssBaseline />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Browse />} />
        <Route exact path='/art' element={<ArtPage />} />
        <Route exact path='/jewelry' element={<JewelryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
}

export default App;