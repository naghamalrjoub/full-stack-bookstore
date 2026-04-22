import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedBook = ({price, title, author}) => {
  return (
    <div className='card category-card h-100'>
        <div className="d-flex align-items-center justify-content-center rounded-top-2" style={{backgroundColor: "rgb(85, 40, 40)", height: "17rem", width: "17rem"}}>
            <span style={{color: "#F5EFE6"}}>{title}</span>
        </div>

        <div className="card-body d-flex flex-column">
            <h6 className="card-title">{title}</h6>
            <p className="card-text text-muted">{author}</p>
            <div className="d-flex justify-content-between align-items-center mt-auto">
                <span className="fw-500">{price}</span>
                <Link  to="/books/:id" className='btn btn-outline-primary navButton' style={{color: 'white'}}>view</Link>
            </div>
        </div>
    </div>
  )
}

export default FeaturedBook