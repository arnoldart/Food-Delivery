import React from 'react'
import Jumbotron from '../../Sections/Jumbotron'
import { JumObjOne } from './HomeData'

function Home() {
  return (
    <>
      <Jumbotron {...JumObjOne}/>
    </>
  )
}

export default Home
