import React from 'react'
import SignUp from '../components/SignUp'

const Register = () => {
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
                            Welcome!
                        </h1>
                        <p className='mt-3 fs-5'>
                            Create an account to start exploring thousands of books and build your personal library.
                        </p>
                    </div>
                </div>
                <div className="col-lg-5 registerRight d-flex justify-content-center rounded-5 py-5 ms-5" data-aos="fade-right">
                    <SignUp />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register