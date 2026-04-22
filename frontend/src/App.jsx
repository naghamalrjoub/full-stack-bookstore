import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import About from './pages/About'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <div className='d-flex flex-column'>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Books' element={<Books />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Register' element={<Register />}></Route>
            <Route path='/Login' element={<Login />}></Route>
        </Routes>

        <Footer />
       
    </div>
  )
}

export default App
