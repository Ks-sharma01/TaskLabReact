
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
