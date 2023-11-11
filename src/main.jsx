import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

//css file
import './index.css'
import Footer from './components/Footer'

const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? 'red' : 'black'
  }
}
const wait = (time) => {
  return new Promise(resovle => setTimeout(resovle, time))
}
const App = React.lazy(() => wait(1000).then(() => import('./App.jsx')))
const Store = React.lazy(() => import('./pages/Store'))
const About = React.lazy(() => import('./pages/About'))
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <div className='flex items-center justify-evenly mt-5'>
      <NavLink style={activeStyle} to='/'>home</NavLink>
      <NavLink style={activeStyle} to='/store'>store</NavLink>
      <NavLink style={activeStyle} to='/about'>about</NavLink>
    </div>
    
    <Suspense fallback={<h1>loading...</h1>}>
      <div className='mx-auto w-4/5 pt-3'>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='store' element={<Store />}></Route>
          <Route path='about' element={<About />}></Route>
        </Routes>
      </div>
        <Footer></Footer>
    </Suspense>
  </BrowserRouter >
)
