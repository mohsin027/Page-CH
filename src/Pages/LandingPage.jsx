import React from 'react'
import { Nav } from '../components/Nav/Nav'
import { Hero } from '../components/Hero/Hero'
import { Frame1 } from '../components/Frame1/Frame1'
import { Frame2 } from '../components/Frame2/Frame2'
import { MoreLife } from '../components/MoreLife/MoreLife'
import Campaign from '../components/Campaign/Campaign'
import { Footer } from '../components/Footer/Footer'

export const LandingPage = () => {
  return (
    <div>
        <Nav></Nav>
        <Hero/>
        <Frame1/>
        <Frame2/>
        <MoreLife/>
        <Campaign/>
        <Footer/>
    </div>
  )
}
