import React from 'react'
// import data from './Contact'

export default function PeopleList({data}) {
    const arr = data

    const list = arr.map((person, index) => (<li key={index}> {person}</li>))
  return (
    <div>
       <ul>
        {list}
       </ul>
        
    </div>
  )
}
