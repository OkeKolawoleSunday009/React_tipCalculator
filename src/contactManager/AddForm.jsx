import React from 'react'
import { useState } from 'react'

export default function AddForm(props) {

    
    const [person, setPerson] = useState('')
   
   const handleChange = (e) => {
    setPerson(e.target.value)
   }
   const handleSubmit = (e) => {
  
    
    if(person === ""){
      alert('fill the field')
    }else{
      e.preventDefault()
      props.handleClick(person)
      setPerson('')
       }
    
   }
   
  return (
    <div>
        add  Contact Form
         <form onSubmit={handleSubmit}>
            <input className='inputText' type="text"
             value={person} 
             placeholder="Add Contact"
             onChange={handleChange}
             
             />
             
             <button type='submit'>Click</button>
             <br />
             
        </form>
        </div>
  )
}
