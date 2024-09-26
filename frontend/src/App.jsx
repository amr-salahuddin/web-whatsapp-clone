import { useMemo, useState } from 'react'
import './App.css'
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme.js";
import Home from "./pages/Home.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from './state/first';
import Auth from './pages/Auth';

function App() {


  const dispatch = useDispatch();

  const isAuth = Boolean(useSelector((state) => state.token))
  const mode = useSelector((state) => state.mode)
  dispatch(setMode({ mode: 'light' }));

  console.log(mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className='app'>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          {isAuth? <Home /> : <Auth />}
        </ThemeProvider>
    </div>
  )
}

export default App
