import React from 'react'
import NavBar from '../components/NavBar';
import HomeBody from '../components/HomeBody';
import Foot from '../components/Foot';

const Home = () => {
  return (
    <div>
        <NavBar color="#faf9f8"/>
        <HomeBody/>
        <Foot/>
    </div>
  )
}

export default Home