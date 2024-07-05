import React from 'react'
import Topbar from './scenes/global/Topbar1';
import Dashboard from '../src/scenes/dashboard/index';
import About from './components/About'

import CarouselComponent from './components/courouse/Courousel';
function Home() {
  return (
    <div>
      <Topbar/>
      <CarouselComponent/>
      <Dashboard/>
    </div>
  )
}

export default Home
