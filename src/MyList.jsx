// const arr= [A,B,C]
// export default arr
// import data from './DisplayingList'

import React from 'react'
import DisplayingList from './DisplayingList'

export default function MyList() {
    const persons=[
        {
        id: 1,
        name: 'Bruce',
        age:32
        },
        {
          id: 2,
        name: 'Francis',
        age:32
        }
    ]

   const personList = persons.map(person => <DisplayingList key={persons.id} personally ={person}/>)
    
  return (
    <div>
        MyList
        <ul>
          {personList}
        </ul>
        
    </div>
  )
}
