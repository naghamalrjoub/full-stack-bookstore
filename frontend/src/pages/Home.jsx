import React from 'react'
import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import FeaturedBooks from '../components/FeaturedBooks'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <Categories />
        <FeaturedBooks />
    </div>
  )
}

export default Home