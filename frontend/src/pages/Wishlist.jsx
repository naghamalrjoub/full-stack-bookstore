import React from 'react'
import { useWishlist } from '../context/WishlistContext'

const Wishlist = () => {
    const {wishlist} = useWishlist();
    console.log(wishlist)
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist