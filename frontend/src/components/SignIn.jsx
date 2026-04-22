import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
            <div id="logIn" class="container-fluid d-flex justify-content-center mt-5">
            <form id="logInForm">
                <h1 class="pb-4">Log in to your account</h1>
                <div>
                    <div class="mb-3">
                        <label for="inputEmail" class="form-label">Email address</label>
                        <input type="email" class="form-control" placeholder="john.doe@gmail.com" id="inputEmail" />
                    </div>
                    <div class="mb-3">
                        <label for="inputPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword" />
                        <div class="d-flex justify-content-between">
                            <button id="forgetPassword" class="form-text btn btn-link p-0" style={{color:"rgb(244, 244, 244)"}}>forget password</button>       
                            <Link to={'/Register'} class="form-text btn btn-link p-0" id="signUpLink" style={{color:"rgb(244, 244, 244)"}}>create account</Link>                 
                        </div>

                    </div>  
                    <div class="mb-3 form-check d-flex justify-content-between">
                        <div>
                            <input type="checkbox" class="form-check-input" id="rememberMe" />
                            <label for="rememberMe" class="form-check-label">Remember me</label>                            
                        </div>

                        <button class="btn navButton" id="logInBtn">log in</button> 
                    </div>
                                     
                </div>
                
            </form>
        </div>
  )
}

export default SignIn