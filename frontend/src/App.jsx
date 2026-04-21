import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import About from './pages/About'

function App() {
  return (
    <>
        <Navbar></Navbar>

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Books' element={<Books />}></Route>
            <Route path='/About' element={<About />}></Route>
        </Routes>
    </>
  )
}

export default App
