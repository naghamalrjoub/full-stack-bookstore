import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../components/SignIn'

const Login = () => {
  return (
    <div className='register d-flex'>
        <div className="container align-content-center mb-5">
            <div className="row gap-5">
                <div className="col-lg-5 d-flex flex-column justify-content-center registerLeft" data-aos="fade-right">
                    <div className='d-flex gap-4 '>
                        <div className="category-box">FICTION</div>
                        <div className="category-box tall">HISTORY</div>
                        <div className="category-box">SCIENCE</div>
                        <div className="category-box tall">POETRY</div>
                        <div className="category-box dark">PHILOSOPHY</div>                        
                    </div>

                    <div className='mt-4'>
                        <h1 className='display-4 fw-bold'>
                            Welcome Back!
                        </h1>
                        <p className='mt-3 fs-5'>
                            Your next great read is waiting. Sign in to access your cart, wishlist, and favourites.
                        </p>
                    </div>
                </div>
                <div className="col-lg-5 registerRight d-flex justify-content-center rounded-5 py-5 ms-5" data-aos="fade-right">
                    <SignIn />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login