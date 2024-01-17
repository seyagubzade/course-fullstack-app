import React from 'react'
import HeroSlider from '../../components/HeroSlider'
import Courses from './Courses'
import OurServices from './OurServices'
import UpcomingEvents from './UpcomingEvents'

const Home = () => {
  return (
    <div>
        <HeroSlider />
        <Courses />
        <OurServices />
        <UpcomingEvents />
    </div>
  )
}

export default Home