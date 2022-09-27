import React from 'react'
import  Avatar from '@material-ui/core/Avatar';
import './style/videocard.css'

function VideoCard({image, title, channel, views, timestamp, channelImage}) {
  return (
    <div className="videocard__container">
        <img className='imgclass' src={image} alt=""/>

        <div className="video__info">
            <Avatar
                className="videoCard__avatar"
                alt={channel}
                src={channelImage}
            />

     

            <div className="video__title">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views}  + {timestamp}
                </p>

            </div>
        </div>
    </div>
  )
}

export default VideoCard