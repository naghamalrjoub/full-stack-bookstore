import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import FeaturedBook from './FeaturedBook'

const books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", price: 12.99, bg: "#6D4C41" },
    { id: 2, title: "Sapiens", author: "Yuval Noah Harari", price: 14.99, bg: "#5D4037" },
    { id: 3, title: "Atomic Habits", author: "James Clear", price: 13.99, bg: "#8D6E63" },
    { id: 4, title: "1984", author: "George Orwell", price: 9.99, bg: "#795548" },
]

const FeaturedBooks = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/api/book?limit=8").then((result)=>{
            console.log(result.data)
            setBooks(result.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

  return (
    <div className='container-fluid mt-2 pt-4 mx-5 pb-5'>
        <h3 className='featured-books' style={{color: "rgb(85, 50, 40)", textDecoration:"underline rgb(129, 100, 80)", textUnderlineOffset:"15px"}}>
            Featured Books
        </h3>
        <div className="scroll gap-3 d-flex  mt-5 pt-2">
            {
                books.map(elem=>{
                    return (
                        <div key={elem._id}>
                            <FeaturedBook title={elem.title} price={elem.price} author={elem.author.name} image={elem.image} id ={elem._id}></FeaturedBook>
                        </div>
                    )
                })
            }
            <Link to={"/books"} className="card category-card" style={{width: "10rem"}}>
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <h5 className="card-title mt-2">view more</h5>
                    </div>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedBooks