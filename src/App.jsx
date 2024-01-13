import React from 'react'
import { Box, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import PostsList from './features/posts/PostsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditPostForm from './features/posts/EditPostForm';
import './index.css'
function App() {
  return (
    <BrowserRouter>
      <Box component='div' sx={{ padding: '20px' }}>
        <Routes>
          <Route element={<PostsList />} path='/' />
          <Route element={<EditPostForm />} path='edit/:id' />
        </Routes >
      </Box>
    </BrowserRouter >
  )
}

export default App
