import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../api';
import { useCart } from '../context/CartContext';
import { useFavourites } from '../context/FavouritesContext';
import { useWishlist } from '../context/WishlistContext';
import FeaturedBooks from '../components/FeaturedBooks'

const BookPage = () => {
    const {id} = useParams()
    const [book, setBook] = useState(null);
    const {addToCart} = useCart()
    const {addToFavourites, removeFromFavourites} = useFavourites();
    const {addToWishlist, removeFromWishlist} = useWishlist();
    const [wished, setWished] = useState(false)
    const [faved, setFaved] = useState(false)

    const handleAddToCart = async () => {
        await addToCart(book._id)
    }

    const handleWishlist = async () => {
        if (!wished) {
            addToWishlist(book._id)
        }
        else {
            removeFromWishlist(book._id)
        }
        setWished(!wished)
    }

    const handleFavourite = async () => {
        if (!faved) {
            addToFavourites(book._id)
        }
        else {
            removeFromFavourites(book._id)
        }
        setFaved(!faved)
    }

    useEffect(()=>{
        const fetch = async () => {
            try {
                const res = await API.get(`/book/${id}`)
                setBook(res.data)
            }
            catch(err) {
                console.log(err)
            }
        }

        fetch()
    }, [id])

    
  return (
    <div style={{minHeight:"100vh"}} className='container-fluid d-flex flex-column justify-content-center align-items-center mt-5'>
        {
            book &&
        <div className="card mb-3 w-75">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={book.image} alt="" className="img-fluid rounded-start" style={{minHeight:"25rem"}} />
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-around h-100">
                        <div>
                            <h5 className="card-title">
                                {book.title}
                            </h5>
                            <p className="card-text">Price: ${book.price}</p>                            
                            <p className="card-text">{book.description}</p>                            
                        </div>
                        <div className='d-flex justify-content-between'>
                            <button className='btn navButton' onClick={handleAddToCart}>Add to cart</button>
                            <div className='d-flex gap-2'>
                                <button className='btn btn-outline-danger' onClick={handleWishlist}>{wished ? '♥' : '♡'} Wishlist</button>
                                <button className='btn btn-outline-success' onClick={handleFavourite}>{faved ? '★' : '☆'} Favourite</button>                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        <FeaturedBooks></FeaturedBooks>
    </div>
  )
}

export default BookPage