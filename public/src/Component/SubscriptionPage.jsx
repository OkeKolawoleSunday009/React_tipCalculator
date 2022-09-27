import React from 'react'
import Subscription from './Subscription'
import SideBar from './SideBar';
import './style/Apppage.css'



function SubscriptionPage() {
  return (
    <div>
      <div className='App__page'>
        <SideBar />
        <Subscription/>
    </div>


    </div>
  )
}

export default SubscriptionPage