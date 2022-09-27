import React from 'react'
import './style/Recommendations.css'
import VideoCard from './VideoCard'
import renew2 from '../img/renew2.jfif'
function Recommendations() {
  return (
    <div className="Recommendations">
       <h2>Recommendation</h2>

       <div className="recommended__vids">


       <VideoCard 
       title="Become a devops in one day"
      views= "2.3M views"
      timestamp="3 days ago"
       channel="Oke Kolawole"
       image={renew2}
       
       />
        <VideoCard 
       title="Become a devops in one day"
      views= "2.3M views"
      timestamp="3 days ago"
       channel="Oke Kolawole"
       image={renew2}
       
       />
        <VideoCard 
       title="Become a devops in one day"
      views= "2.3M views"
      timestamp="3 days ago"
       channel="Oke Kolawole"
       image={renew2}
       
       />
        <VideoCard 
       title="Become a devops in one day"
      views= "2.3M views"
      timestamp="3 days ago"
       channel="Oke Kolawole"
       image={renew2}
       
       />
        <VideoCard 
       title="Become a devops in one day"
      views= "2.3M views"
      timestamp="3 days ago"
       channel="Oke Kolawole"
       image={renew2}
       
       />
        <VideoCard 
       title="Become a devops in one day"
      views= "2.3M views"
      timestamp="3 days ago"
       channel="Oke Kolawole"
       image={renew2}
       
       />
       </div>
       
    </div>
  )
}

export default Recommendations