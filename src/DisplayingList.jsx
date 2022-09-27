import React from 'react'
// import MyList from './MyList'


export default function DisplayingList({personally}) {


  return (
    <div>
        {/* <h1>DisplayingList</h1> */}
         <li>{personally.name} {personally.age}</li>
    </div>

  )
}
