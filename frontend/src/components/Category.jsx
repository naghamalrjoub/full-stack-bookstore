import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({title, count}) => {
  return (
    <div>
            <div className="card category-card text-center" style={{width: "17rem"}}>
                    <div className="card-body">
                        <h5 className="card-title mt-2">{title}</h5>
                    </div>
            </div>        
    </div>


  )
}

export default Category