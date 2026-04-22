import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='heroSection d-flex'>
        <div className="container mb-5 align-content-center">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column heroLeft" data-aos="fade-right">
                    <h1 className='display-3 fw-bold'>
                        Find your next<br/>favourite read
                    </h1>
                    <p className='mt-4 fs-5'>
                        Explore thousands of books across every genre. From timeless classics to modern bestsellers — your next story is waiting
                    </p>
                    <div className="container">
                        <Link to="/Books" className='btn btn-outline-primary navButton'>Browse Books</Link>
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center gap-4 heroRight" data-aos="fade-left">
                    <div className="category-box">FICTION</div>
                    <div className="category-box tall">HISTORY</div>
                    <div className="category-box">SCIENCE</div>
                    <div className="category-box tall">POETRY</div>
                    <div className="category-box dark">PHILOSOPHY</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection