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
                    <p className='navbar-brand'>categories</p>
                    <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#categories" aria-controls="categories" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>     
                    <div className="collapse navbar-collapse d-flex align-items-center justify-content-center" id="categories">
                        <ul className="navbar-nav d-flex justify-content-center gap-4">
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
            </div>
        </nav>
    </div>
  )
}

export default BooksCategoriesNav