import React, { useEffect, useState } from 'react'
import Category from './Category'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Categories = () => {


  return (
    <div className='container-fluid mt-2 pt-4 ms-5 pb-5'>
        <h3 className='browse-by-category' style={{color: "rgb(85, 50, 40)", textDecoration:"underline rgb(129, 100, 80)", textUnderlineOffset:"15px"}}>
            Browse By Category
        </h3>
        <div className="scroll gap-4 d-flex mt-5 pt-2">
            
            <Category title={"Classics"}></Category>
            <Category title={"Romance"}></Category>
            <Category title={"Sci-fi"}></Category>
            <Category title={"History"}></Category>
            <Category title={"Fiction"}></Category>
            <Link to={"/categories"} className="card category-card" style={{width: "17rem"}}>
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <h5 className="card-title mt-2">view more</h5>
                    </div>
            </Link>
        </div>
    </div>
  )
}

export default Categories