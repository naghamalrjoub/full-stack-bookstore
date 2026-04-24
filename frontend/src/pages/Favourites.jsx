import React from 'react'
import {useFavourites} from '../context/FavouritesContext'
import { Link } from 'react-router-dom'

const Favourites = () => {
    const {favourites, removeFromFavourites} = useFavourites()
    console.log(favourites)
    const items = favourites?.items || []
    console.log(items)
  return (
    <div className='mt-4 ms-3 d-flex' style={{minHeight:'100vh', minWidth:'100vw'}} data-aos="fade-up">
        <div>
            {
                items.length ?
                <div className="row mx-4">
                    {
                        items.map(elem => (
                            <div key={elem.book._id} className="col-4 mb-4 g-5">
                                    <div className='card category-card h-100'>

                                    {
                                        elem.book.image?        
                                        <img className="d-flex align-items-center justify-content-center rounded-top-2" style={{height: "15rem"}} src={elem.book.image} />
                                        :
                                        <div className="d-flex align-items-center text-center rounded-top-2" style={{backgroundColor: "rgb(85, 40, 40)", height:"15rem"}}>
                                            <span style={{color: "#F5EFE6"}}>{elem.book.title}</span>
                                        </div>
                                    }

                                    
                                    <div className="card-body d-flex flex-column">
                                        <Link to={`/books/${elem.book._id}`} style={{textDecoration: "none", color:"inherit"}}>
                                        <h6 className="card-title">{elem.book.title}</h6>
                                        <p className="card-text text-muted">{elem.book.description}</p>
                                        </Link>
                                        <div className="d-flex justify-content-between align-items-center mt-auto">
                                            <span className="fw-500">{elem.book.price}$</span>
                                            <button className='btn btn-outline-danger' onClick={()=>removeFromFavourites(elem.book._id)}>remove</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        ))
                    }
                </div>
                :
                <div className='d-flex flex-column align-items-center vw-100'>
                    <h1>Your list is empty</h1>
                    <p>return to home page!</p>
                </div>
            }            
        </div>
    </div>
  )
}

export default Favourites