import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [user, setUser] = useState(localStorage.getItem("token"))

  return (
    <div className='sticky-top'>
        <nav className="navbar navbar-dark navbar-expand-lg" id='mainNav'>
            <div className="container-fluid d-flex">
                <div className='vw-100 d-flex justify-content-between'>
                    <Link to = "/" className='navbar-brand'>Book Shop</Link>
                    <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>                    
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Books" className='nav-link'>Browse</Link>
                        </li>
                        {
                            user ? 
                            <>
                                <li className="nav-item">
                                    <Link to="/Cart" className='nav-link'>Cart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Wishlist" className='nav-link'>Wishlist</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Favourites" className='nav-link'>Favourites</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Account" className='btn btn-outline-primary navButton'>my account</Link>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link to="/Register" className='btn btn-outline-primary navButton'>register</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar