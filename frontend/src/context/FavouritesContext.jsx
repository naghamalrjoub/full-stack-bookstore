import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import API from '../api'

const FavouritesContext = createContext();

export const FavouritesProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);
    const user = useAuth();

    useEffect(()=>{
        const getFavourites = async () => {
            if (!user) {
                setFavourites([])
                return;
            }

            try {
                const res = await API.get("/user/favourites")
                setFavourites(res.data)
            }
            catch(err) {
                console.log(err)
            }
        }

        getFavourites()
    }, [user])

    const addToFavourites = async (bookId) => {
        try {
            const res = await API.patch(`/user/favourites/${bookId}`)
            setFavourites(res.data)
        }

        catch(err) {
            console.log(err)
        }
    }

    const removeFromFavourites = async (bookId) => {
        try {
            const res = await API.delete(`/user/favourites/${bookId}`)
            setFavourites(res.data)
        }

        catch(err) {
            console.log(err)
        }
    }

    return (
        <FavouritesContext.Provider value={{favourites, addToFavourites, removeFromFavourites}}>
            {children}
        </FavouritesContext.Provider>
    )
}

export const useFavourites = () => {
    return useContext(FavouritesContext)
}