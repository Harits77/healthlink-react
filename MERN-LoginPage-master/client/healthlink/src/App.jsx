import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Register'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Pratice from './components/Pratice'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/login' element={<Login />}></Route>
         <Route path='/register' element={<Signup />}></Route>
         <Route path='/Dash' element={<Dashboard />}></Route>
         <Route path='/pratice' element={<Pratice />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
