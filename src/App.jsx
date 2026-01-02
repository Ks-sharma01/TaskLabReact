
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './pages/Layout/Header'
import Footer from './pages/Layout/Footer'
import Index from './pages/Index'
import Home from './pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      
      <Route path="/Login" element={<Login />}/>
      <Route path="/Register" element={<Register />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
