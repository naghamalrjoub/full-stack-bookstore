import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedBook from './FeaturedBook';
import { useLocation } from 'react-router-dom';
import AOS from 'aos'


const DisplayBooks = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const category = params.get("category")    
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const url = category ? 
                    `http://localhost:5000/api/book?category=${category}`
                    :
                    `http://localhost:5000/api/book`
        axios.get(url).then((result)=>{
            console.log(result.data)
            setBooks(result.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [location])


  return (
<div className="row mx-4" data-aos="fade-up">
    {
        books.map(elem => (
            <div key={elem._id} className="col-md-2 mb-4 g-5">
                <FeaturedBook title={elem.title} price={elem.price} author={elem.author.name} image={elem.image} id={elem._id}
                />
            </div>
        ))
    }
</div>
  )
}

export default DisplayBooks