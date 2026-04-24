import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(localStorage.getItem("user"))
    const [token, setToken] = useState(localStorage.getItem("token"));

    const login = (_token, userData) => {
        localStorage.setItem("token", _token)
        localStorage.setItem("user")
        setUser(userData)
        setToken(_token)
    }

    const logout = () => {
        localStorage.removeItem("token")
        setUser(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{user, login, logout, token}}>
            {children}
        </AuthContext.Provider>
    )
} 

export const useAuth = () => {
    return useContext(AuthContext)
}