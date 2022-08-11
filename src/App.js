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
import { AuthProvider } from './contexts/AuthProvider';
import LoginPage from './pages/LoginPage';
import { RequireAuth } from './components/RequireAuth';

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
      <AuthProvider>
      <Navbar />
        <ArtProvider>
          <JewelryProvider>
          <Routes>
            <Route exact path='/login' element={<LoginPage />} />
            <Route exact path='/' element={<RequireAuth><Browse /></RequireAuth>} />
            <Route exact path='/art' element={<RequireAuth><ArtPage /></RequireAuth>} />
            <Route exact path='/art/add' element={<RequireAuth><ArtFormPage /></RequireAuth>} />
            <Route exact path='/jewelry' element={<RequireAuth><JewelryPage /></RequireAuth>} />
            <Route exact path='/jewelry/add' element={<RequireAuth><JewelryFormPage /></RequireAuth>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </JewelryProvider>
        </ArtProvider>
      </AuthProvider>
    </ThemeProvider>
  </>
}

export default App;