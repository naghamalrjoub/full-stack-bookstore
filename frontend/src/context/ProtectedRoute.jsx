import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user} = useAuth();
  return (
    user ? children : <Navigate to="/login"></Navigate>
  )
}

export default ProtectedRoute