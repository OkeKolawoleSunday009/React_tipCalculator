import React from 'react'
import Search from './Search'
import SideBar from './SideBar';
// import Search from './Siearch';


import './style/Apppage.css'


function ResultSearch() {
  return (
    <div>
        <div className='App__page'>
        <SideBar />
        <Search/>
    </div>
    </div>
  )
}

export default ResultSearch