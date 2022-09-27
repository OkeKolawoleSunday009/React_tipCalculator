import React from 'react'
import Trending from './Trending'
import SideBar from './SideBar';
import './style/Apppage.css'



function TrendingPage() {
  return (
    <div>
      <div className='App__page'>
        <SideBar />
        <Trending/>
    </div>


    </div>
  )
}

export default TrendingPage