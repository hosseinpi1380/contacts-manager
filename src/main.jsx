import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import App from './App.jsx'

import Contacts from './pages/Contact/Contacts.jsx'
import Shopping from './pages/Shopping.jsx'
import NewContact from './pages/Contact/NewContact.jsx';
import Error from './pages/Error.jsx'
import EditContact from './pages/Contact/EditContact.jsx'
import DetailContact from './pages/Contact/DetailContact.jsx'
import ContactProvider from './context/contactContext.jsx'

//css file
import './index.css'
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';
const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? 'red' : 'black',
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContactProvider>
        <div className='flex flex-row justify-evenly py-2'>
          <NavLink style={activeStyle} to='/'>Home</NavLink>
          <NavLink style={activeStyle} to='/contacts'>Contacts</NavLink>
          <NavLink style={activeStyle} to='/shopping'>shopping</NavLink>
        </div>
        <div className="mx-2">
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='edit/:id' element={<EditContact />} />
            <Route path='detail/:id' element={<DetailContact />} />
            <Route path='shopping' element={<Shopping />} />
            <Route path='register' element={<NewContact />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
    </ContactProvider>
  </BrowserRouter >
  ,
)
