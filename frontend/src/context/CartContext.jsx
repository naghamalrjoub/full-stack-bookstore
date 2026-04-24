import { createContext } from 'react'
import API from '../api'
import { useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const {user} = useAuth()

    useEffect(()=>{
        const getCart = async () => {
            if (!user){
                setCart([])
                return;
            } 
            try {
                const res = await API.get("/user/cart")
                setCart(res.data)                
            }
            catch (err) {
                console.log(err)
            }
        }

        getCart();

    },[user])

    const addToCart = async (bookId) => {
        try {
            const res = await API.patch(`/user/cart/${bookId}`)
            setCart(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const removeItem = async (bookId) => {
        try {
            const res = await API.delete(`/user/cart/${bookId}`)
            setCart(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const decrementBook = async (bookId) => {
        try {
            const res = await API.delete(`/user/cart/dec/${bookId}`)
            setCart(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const incrementBook = async (bookId) => {
        try {
            const res = await API.patch(`/user/cart/inc/${bookId}`)
            setCart(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeItem, decrementBook, incrementBook}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => {
    return useContext(CartContext)
}