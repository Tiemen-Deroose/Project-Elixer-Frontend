import { createTheme, CssBaseline } from '@mui/material';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Browse from './pages/Browse'
import ArtPage from './pages/ArtPage';
import JewelryPage from './pages/JewelryPage';
import Navbar from './components/NavBar';
import NotFound from './pages/NotFound';
import { ThemeProvider } from '@emotion/react';
import { ArtProvider } from './contexts/ArtProvider';
import { JewelryProvider } from './contexts/JewelryProvider';
import ArtFormPage from './pages/ArtFormPage';
import JewelryFormPage from './pages/JewelryFormPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
      contrastText: '#fff',
    },
    secondary: {
      main: '#777777',
      contrastText: '#fff',
    },
  },
});

function App() {
  return <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Navbar />
      <ArtProvider>
        <JewelryProvider>
        <Routes>
          <Route exact path='/' element={<Browse />} />
          <Route exact path='/art' element={<ArtPage />} />
          <Route exact path='/art/add' element={<ArtFormPage />} />
          <Route exact path='/jewelry' element={<JewelryPage />} />
          <Route exact path='/jewelry/add' element={<JewelryFormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </JewelryProvider>
      </ArtProvider>
    </ThemeProvider>
    </>
}

export default App;