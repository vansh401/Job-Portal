import CategoryCarousel from '@/components/CategoryCarousel'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import LatestJobs from '@/components/LatestJobs'
import React from 'react'

const Home = () => {
  return (
    <div>
    <HeroSection/>
    <CategoryCarousel/>
    <LatestJobs/>
    <Footer/>
    </div>
  )
}

export default Home