import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Favourites from './pages/Favourites'
import ProtectedRoute from './context/ProtectedRoute'

function App() {
  return (
    <div className='d-flex flex-column'>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Books' element={<Books />}></Route>
            <Route path='/Register' element={<Register />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Cart' element={
                <ProtectedRoute>
                   <Cart /> 
                </ProtectedRoute>
            }></Route>
            <Route path='/Wishlist' element={
                <ProtectedRoute>
                   <Wishlist />
                </ProtectedRoute>}>
            </Route>
            <Route path='/Favourites' element={
                <ProtectedRoute>
                   <Favourites />
                </ProtectedRoute>}>
            </Route>
        </Routes>
        
        <Footer />
       
    </div>
  )
}

export default App
