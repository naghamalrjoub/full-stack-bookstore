import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
        <div id="signUp" className="container-fluid d-flex justify-content-center mt-5">
            <form id="signUpForm" className="w-75">
                <h1 className="mb-3 text-center">Create account</h1>
                <div>
                    <div className="mb-3">
                        <lable className="form-label">Email</lable>
                        <input type="email" className="form-control" placeholder='john.doe@gmail.com'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <div className="w-50 pe-2">
                            <label className="form-label">username</label>
                            <input type="text" className="form-control" placeholder="@johndoe123"/>
                        </div>
                        <div className="w-50 ps-2"> 
                            <label className="form-label">name</label>
                            <input type="text" className="form-control" placeholder="John Doe"/>
                        </div>                        
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <button className="btn navButton" id="signUpButton">Sign Up</button>
                    <Link to={'/Login'} style={{color:"rgb(244, 244, 244)"}} className='mt-2'>already have an account</Link>
                </div>
                
            </form>
        </div>
  )
}

export default SignUp