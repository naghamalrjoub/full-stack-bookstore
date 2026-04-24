import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'
import { FavouritesProvider } from './context/FavouritesContext.jsx'

AOS.init({
    duration: 600, once: true
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <AuthProvider>
            <CartProvider>
                <WishlistProvider>
                    <FavouritesProvider>
                        <App />
                    </FavouritesProvider>
                </WishlistProvider>
            </CartProvider>
        </AuthProvider>
    </BrowserRouter> 

  </StrictMode>
)
