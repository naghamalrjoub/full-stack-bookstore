import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className='d-flex flex-column'>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Books' element={<Books />}></Route>
            <Route path='/About' element={<About />}></Route>
        </Routes>

        <Footer />
       
    </div>
  )
}

export default App
