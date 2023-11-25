import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from "react-error-boundary";
//components
import App from './components/pages/App.jsx'
import Communication from './components/pages/Commuication.jsx'
import About from './components/pages/About.jsx'
import Contacts from './components/pages/Contacts.jsx'
import Header from './components/layout/Header.jsx'
import Sidebar from './components/layout/Sidebar.jsx';
//css file
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import './components/UI/style.css'
//material ui components
import { Grid, CssBaseline } from '@mui/material'
import rtlPlugin from 'stylis-plugin-rtl';
import { ThemeProvider, } from '@emotion/react';
import { createTheme } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>مشکلی پیش امده است.</p>
    </div>
  )
};
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const theme = createTheme({
  direction: "rtl",
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary FallbackComponent={ErrorFallBack}>
    <BrowserRouter>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header></Header>

          <Grid container>
            <Sidebar />
            <Grid item lg={10} md={10} sm={9} xs={12}
              className='h-screen bg-gradient-to-br from-blue-400 to-blue-700  p-3 py-5 text-white text-lg'>
              <Routes >
                <Route path='/' element={<App />}></Route>
                <Route path='contacts' element={<Contacts />}></Route>
                <Route path='about' element={<About />}></Route>
                <Route path='communication' element={<Communication />}></Route>
              </Routes>
            </Grid>
          </Grid>
        </ThemeProvider>
      </CacheProvider>
    </BrowserRouter >
  </ErrorBoundary>
  ,
)
