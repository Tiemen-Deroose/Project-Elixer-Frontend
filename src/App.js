import { createTheme, CssBaseline } from '@mui/material';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Browse from './pages/Browse'
import ArtPage from './pages/ArtPage';
import JewelryPage from './pages/JewelryPage';
import Navbar from './components/NavBar';
import NotFound from './pages/NotFound';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      light: '#357a38',
      main: '#4caf50',
      dark: '#6fbf73',
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
      <Routes>
        <Route exact path='/' element={<Browse />} />
        <Route exact path='/art' element={<ArtPage />} />
        <Route exact path='/jewelry' element={<JewelryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
    </>
}

export default App;