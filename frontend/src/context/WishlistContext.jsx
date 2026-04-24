import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import API from '../api'

const WishlistContext = createContext();

export const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([]);
    const user = useAuth();

    useEffect(()=>{
        const getWishlist = async () => {
            if (!user) {
                setWishlist([])
                return;
            }

            try {
                const res = await API.get("/user/wishlist")
                setWishlist(res.data)
            }
            catch(err) {
                console.log(err)
            }
        }

        getWishlist()
    }, [user])

    const addToWishlist = async (bookId) => {
        try {
            const res = await API.patch(`/user/wishlist/${bookId}`)
            setWishlist(res.data)
        }

        catch(err) {
            console.log(err)
        }
    }

    const removeFromWishlist = async (bookId) => {
        try {
            const res = await API.delete(`/user/wishlist/${bookId}`)
            setWishlist(res.data)
        }

        catch(err) {
            console.log(err)
        }
    }

    return (
        <WishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => {
    return useContext(WishlistContext)
}