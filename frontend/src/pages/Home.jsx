import React from 'react'
import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import FeaturedBooks from '../components/FeaturedBooks'


const Home = () => {
  return (
    <div>
        <HeroSection />
        <div data-aos="fade-up">
            <Categories />   
        </div>
        <div data-aos="fade-up">
            <FeaturedBooks />
        </div>
        
    </div>
  )
}

export default Home