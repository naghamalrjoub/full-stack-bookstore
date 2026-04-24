import React from 'react'
import { Link } from 'react-router-dom'

const queries = [
    "philosophy", "history", "religion",
    "fiction", "fantasy", "science-fiction",
    "mystery", "horror", "self-help"
];

const BooksCategoriesNav = () => {
  return (
    <div className='sticky-top'>
        <nav className="navbar navbar-dark navbar-expand-lg" id='categoriesNav'>
            <div className="container-fluid d-flex">
                <div className='vw-100 d-flex justify-content-between'>
                    <Link to={"/Books"} className='navbar-brand'>categories</Link>
                    <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#categories" aria-controls="categories" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                </div>     
                    <div className="collapse navbar-collapse" id="categories">
                        <ul className="navbar-nav vw-100 d-flex gap-4">
                            <li className="nav-item">
                                <Link className='nav-link' to={`/Books`}>
                                all
                                </Link>                                      
                            </li>
                            {
                                queries.map((q, i)=>{
                                    return (
                                    <li className="nav-item" key={i}>
                                        <Link className='nav-link' to={`/Books/?category=${q}`}>
                                            {q}
                                        </Link>                                      
                                    </li>   
                                    )
                                })
                            }
                        </ul>
                    </div>              
                </div>
        </nav>
    </div>
  )
}

export default BooksCategoriesNav