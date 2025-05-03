import React from 'react'
import HomeNavbar from './home-navbar'
import StarUs from './star-us'
import Title from './title'
import Preview from './preview'
import { Features } from './features'
import Pricing from './pricing'
import Footer from './footer'

const LandingPage = () => {
  return (
    <div >
      <HomeNavbar />
      <StarUs />
      <Title />
      <Preview />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default LandingPage
