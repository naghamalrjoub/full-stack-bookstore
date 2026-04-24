import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedBook = ({price, title, author, image, id}) => {
  return (
    <div className='card category-card h-100'>

        {
            image?        
            <img className="d-flex align-items-center justify-content-center rounded-top-2" style={{height: "15rem"}} src={image} />
            :
            <div className="d-flex align-items-center text-center rounded-top-2" style={{backgroundColor: "rgb(85, 40, 40)", height:"15rem"}}>
                <span style={{color: "#F5EFE6"}}>{title}</span>
            </div>
        }

        <Link to={`/books/${id}`} style={{textDecoration: "none", color:"inherit"}}>
            <div className="card-body d-flex flex-column">
                <h6 className="card-title">{title}</h6>
                <p className="card-text text-muted">{author}</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="fw-500">{price}$</span>
                    <button className='btn btn-outline-primary navButton' style={{color: 'white'}}>add to cart</button>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default FeaturedBook