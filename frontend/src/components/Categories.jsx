import React from 'react'
import Category from './Category'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='container-fluid categoriesHome mt-2 pt-4 ps-5 pb-5'>
        <h3 className='browse-by-category' style={{color: "rgb(85, 50, 40)", textDecoration:"underline rgb(129, 100, 80)", textUnderlineOffset:"15px"}}>
            Browse by Category
        </h3>
        <div className="category-scroll d-flex gap-3 d-flex justify-content-cente0r mt-5 pt-2">
            <Category title={"Philosophy"} count={0}></Category>
            <Category title={"Classics"} count={0}></Category>
            <Category title={"Romance"} count={0}></Category>
            <Category title={"Sci-fi"} count={0}></Category>
            <Category title={"History"} count={0}></Category>
            <Category title={"Fiction"} count={0}></Category>
            <Link to={"/categories"} className="card category-card" style={{width: "18rem"}}>
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <h5 className="card-title mt-2">view more</h5>
                    </div>
            </Link>
        </div>
    </div>
  )
}

export default Categories