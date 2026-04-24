import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api'
import { useAuth } from '../context/AuthContext'

const SignUp = () => {

    const {login} = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [conPass, setConPass] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('')
        if (!email || !password || !username || !name) {
            setError("all fields are required")
            return
        }
        else if (password !== conPass) {
            setError("make sure to write the password correctly")
            return
        }

        else if (password.length < 8) {
            setError("minimum password length = 8!")
            return
        }

        else {

            try {
                const res = await API.post("/user/register", {
                    email, username, name, password
                })
                console.log(res.data)
                if (res.data) {
                    navigate("/login")
                }               
            }
            catch(err){
                setError("registration failed, try again")
            }
        }
    }

  return (
        <div id="signUp" className="container-fluid d-flex justify-content-center mt-5">
            <form id="signUpForm" className="w-75" onSubmit={handleRegister}>
                <h1 className="mb-3 text-center">Create account</h1>
                <div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder='john.doe@gmail.com' onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" onChange={(e)=>{setConPass(e.target.value)}}/>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <div className="w-50 pe-2">
                            <label className="form-label">username</label>
                            <input type="text" className="form-control" placeholder="@johndoe123" onChange={(e)=>{setUsername(e.target.value)}}/>
                        </div>
                        <div className="w-50 ps-2"> 
                            <label className="form-label">name</label>
                            <input type="text" className="form-control" placeholder="John Doe" onChange={(e)=>{setName(e.target.value)}}/>
                        </div>  
                        </div>                       
                        <div className='text-center mt-1'>
                            {
                                error && <div className='text-danger-emphasis'>{error}</div>
                            }                            
                        </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <button className="btn navButton" id="signUpButton" type='submit'>Sign Up</button>
                    <Link to={'/Login'} style={{color:"rgb(244, 244, 244)"}} className='mt-2'>already have an account</Link>
                </div>
                
            </form>
        </div>
  )
}

export default SignUp