import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'

const Rooms = () => {
  return <Hero hero="roomsHero">

    <Banner title="our rooms">
    <Link to="/"  className='btn-primary'>
      return home
      </Link>
    </Banner>
    
  </Hero>
  
}

export default Rooms
