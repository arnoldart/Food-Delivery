import React from 'react'
import Jumbotron from '../../Sections/Jumbotron'
import HeroSections from '../../Sections/HeroSections'
import { JumObjOne } from './HomeData'
import { HeroObjOne, HeroObjTwo, HeroObjThree } from '../Herosection/HeroData'
import HeroSection from '../../Sections/HeroSection'
import HeroSectionss from '../../Sections/HeroSectionss'
import Footer from '../../Sections/Footer'
import { FooterObj } from '../Footer/FooterData'

function Home() {
  return (
    <>
      <Jumbotron {...JumObjOne}/>
      <HeroSections {...HeroObjOne} />
      <HeroSection {...HeroObjTwo}/>
      <HeroSectionss {...HeroObjThree}/>
      <Footer {...FooterObj}/>
    </>
  )
}

export default Home
