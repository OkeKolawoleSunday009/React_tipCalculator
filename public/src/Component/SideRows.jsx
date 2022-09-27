import React from 'react'
import './style/sidebar.css'

function sideRows({selected, title, Icon}) {
  return (
    <div className={`sidecontainer ${selected && "selected"}`}>
        <Icon className="sidebar__icon" />
        <h3 className="sidebar__title">{title}</h3>
    </div>
  )
}

export default sideRows