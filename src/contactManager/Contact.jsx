import React from 'react'
import AddForm from './AddForm'
import PeopleList from './PeopleList'
import { useState } from 'react'

export default function Contact(){
    const [contacts, setContacts] = useState([])

    function addPerson(name){
        setContacts([
          ...contacts, name
        ])
    }
  return (
    <div>
        <AddForm handleClick={addPerson}/>
        <PeopleList data = {contacts} />
    </div>
  )
}
