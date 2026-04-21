import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({title, count}) => {
  return (
    <div>
        <Link to={`/categories/${title}`} style={{textDecoration: "none"}}>
            <div className="card category-card text-center" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title mt-2">{title}</h5>
                        <p className="card-text text-muted">{count} books</p>
                    </div>
            </div>        
        </Link>        
    </div>


  )
}

export default Category