import React from 'react'
import BooksCategoriesNav from '../components/BooksCategoriesNav'
import FeaturedBooks from '../components/FeaturedBooks'
import DisplayBooks from '../components/DisplayBooks'

const Books = () => {
  return (
    <div>
        <BooksCategoriesNav />
        <DisplayBooks />
    </div>
  )
}

export default Books