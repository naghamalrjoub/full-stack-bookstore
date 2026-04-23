import React, { useEffect, useState } from 'react'
import Category from './Category'
import { Link } from 'react-router-dom'
import axios from 'axios';

const queries = [
    "philosophy", "history", "religion",
    "fiction", "fantasy", "science-fiction",
    "mystery", "horror", "self-help"
];
const Categories = () => {


  return (
    <div className='container-fluid mt-2 pt-4 ms-5 pb-5'>
        <h3 className='browse-by-category' style={{color: "rgb(85, 50, 40)", textDecoration:"underline rgb(129, 100, 80)", textUnderlineOffset:"15px"}}>
            Browse By Category
        </h3>
        <div className="scroll gap-4 d-flex mt-5 pt-2">
            
            {
                queries.map((q, i)=>{
                    return (
                        <Link className='nav-link' to={`/Books/?category=${q}`}>
                            <Category title={q}></Category>
                        </Link>                                      
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default Categories