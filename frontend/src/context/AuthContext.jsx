import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(localStorage.getItem("token"));

    const login = (token) => {
        localStorage.setItem("token", token)
        setUser(token)
    }

    const logout = () => {
        localStorage.removeItem("token")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
    )
} 

export const useAuth = () => {
    return useContext(AuthContext)
}