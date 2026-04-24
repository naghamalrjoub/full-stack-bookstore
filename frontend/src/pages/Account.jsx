import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useFavourites } from '../context/FavouritesContext'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { Link, useNavigate } from 'react-router-dom'

const Account = () => {
    const {user, logout} = useAuth()
    
    console.log(user)
    const name = user?.split(" ")[0]
    console.log(name)
    const {cart} = useCart()
    const {favourites} = useFavourites()
    const {wishlist} = useWishlist()
    const navigate = useNavigate();

    const handleLogout = async () => {
        logout()
        navigate('/')
    }

  return (
    <div className='container mt-5' style={{ minHeight:"100vh" }}>
            <div className=' mb-4 d-flex justify-content-between'>
                <div className='d-flex align-items-center justify-content-start gap-3'>
                    <div className='rounded-circle d-flex align-items-center justify-content-center text-white fw-500'
                        style={{ width: "8rem", height: "8rem", fontSize: 20, backgroundColor:"rgb(85, 50, 40)" }}>
                        {name}
                    </div>
                    <div>
                        <h5 className='mb-0'>{name}</h5>
                        <small>{user}</small>
                    </div>
                </div>
                <div className=' d-flex align-items-center'>
                    <button className="navButton btn">Edit your account</button>
                </div>
                
            </div>
            <div className='row g-3 mb-4'>
                <div className='col-4'>
                    <div className='card text-center p-3'>
                        <h4>{cart?.items?.length || 0}</h4>
                        <small className='text-muted'>Titles in Cart</small>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card text-center p-3'>
                        <h4>{wishlist?.items?.length || 0}</h4>
                        <small className='text-muted'>Wishlist</small>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card text-center p-3'>
                        <h4>{favourites?.items?.length || 0}</h4>
                        <small className='text-muted'>Favourites</small>
                    </div>
                </div>
            </div>
            <div className='list-group mb-3'>
                <Link to='/wishlist' className='list-group-item list-group-item-action'>Wishlist</Link>
                <Link to='/favourites' className='list-group-item list-group-item-action'>Favourites</Link>
                <Link to='/cart' className='list-group-item list-group-item-action'>Cart</Link>
            </div>

            <button className='btn btn-outline-danger w-100' onClick={handleLogout}>
                Log out
            </button>

    </div>
  )
}

export default Account