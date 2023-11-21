import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from "react-error-boundary";


import App from './App.jsx'
import Communication from './components/pages/Commuication.jsx'
import About from './components/pages/About.jsx'
import Contacts from './components/pages/Contacts.jsx'
import TabsC from './components/UI/TabsC.jsx'
import Header from './components/UI/Header.jsx'
//css file
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
//material ui
import { Grid, Box, CssBaseline } from '@mui/material'
import Sidebar from './components/UI/Sidebar.jsx';
const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>مشکلی پیش امده است.</p>
    </div>
  )
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary FallbackComponent={ErrorFallBack}>
    <BrowserRouter>
      <CssBaseline />
      <Header></Header>
      <Grid container>
        <Sidebar/>
        <Grid item lg={10} md={10} sm={8} xs={12} className='h-screen text-white bg-blue-950'>
          <Routes >
            <Route path='/' element={<App />}></Route>
            <Route path='contacts' element={<Contacts />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='communication' element={<Communication />}></Route>
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter >
  </ErrorBoundary>
  ,
)
