import React from 'react'
import './style/sidebar.css';
import SideRows from './SideRows';
import  HomeIcon from '@material-ui/icons/Home';
import  WhatshotIcon from '@material-ui/icons/Whatshot';
import  SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import  VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import  HistoryIcon from '@material-ui/icons/History';
import  OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import  WatchLaterIcon from '@material-ui/icons/WatchLater';
import  ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import  ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {Link} from 'react-router-dom'




function SideBar() {
  return (
    <div className="sidebar">
        <Link to ={`/`} >
        <SideRows selected Icon ={HomeIcon} title="Home" />
        </Link>
        <Link to ={`/Trending`} >
             <SideRows  Icon ={WhatshotIcon} title="Trending" />
        </Link>
        <Link to ={`/Subscription`}>
        <SideRows  Icon ={SubscriptionsIcon} title="Subscriptions" />
        </Link>

        <hr />

        <SideRows  Icon ={VideoLibraryIcon} title="Library" />
        <SideRows  Icon ={HistoryIcon} title="History" />
        <SideRows  Icon ={OndemandVideoIcon} title="Your Videos" />
        <SideRows  Icon ={WatchLaterIcon} title="Watch Later" />
        <SideRows  Icon ={ThumbUpAltOutlinedIcon} title="Liked Videos" />
        <SideRows  Icon ={ExpandMoreOutlinedIcon} title="Show More" />

      


   </div>
  )
}

export default SideBar