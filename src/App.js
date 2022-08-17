import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Navigate, useLocation, Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline } from '@mui/material';

import theme from './config/Theme';
import { ArtProvider } from './contexts/ArtProvider';
import { JewelryProvider } from './contexts/JewelryProvider';
import { AuthProvider } from './contexts/AuthProvider';
import { RequireAuth } from './components/RequireAuth';
import Navbar from './components/NavBar';
import BrowsePage from './pages/BrowsePage';
import ArtPage from './pages/ArtPage';
import JewelryPage from './pages/JewelryPage';
import ArtFormPage from './pages/ArtFormPage';
import JewelryFormPage from './pages/JewelryFormPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return <>
    <CssBaseline />
    <ThemeProvider theme={createTheme(theme)}>
      <AuthProvider>
        <Navbar />
        <ArtProvider>
          <JewelryProvider>
            <Routes>
              <Route exact path='/login' element={<LoginPage />} />
              <Route exact path='/register' element={<RegisterPage />} />
              <Route exact path='/' element={<RequireAuth><BrowsePage /></RequireAuth>} />
              <Route exact path='/art' element={<RequireAuth><ArtPage /></RequireAuth>} />
              <Route exact path='/art/add' element={<RequireAuth role='admin'><ArtFormPage /></RequireAuth>} />
              <Route exact path='/jewelry' element={<RequireAuth><JewelryPage /></RequireAuth>} />
              <Route exact path='/jewelry/add' element={<RequireAuth role='admin'><JewelryFormPage /></RequireAuth>} />
              <Route path="*" element={<Navigate to="/login" state={{ from: useLocation() }} replace />} />
            </Routes>
          </JewelryProvider>
        </ArtProvider>
      </AuthProvider>
    </ThemeProvider>
  </>;
}

export default App;