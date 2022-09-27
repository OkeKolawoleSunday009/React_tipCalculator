import React from 'react'
import { useState } from 'react'
import Task from './Task'

export default function TodoListApp() {
    const [task, setTask] = useState([])
    const [inputText, setInputText] =useState('')
   
   const handleChange = (e) => {
    setInputText(e.target.value)
   }
  
   const handleSubmit = (e) => {
    e.preventDefault()
    setTask((preVal) => [...preVal, inputText])
   }
   
 

  return (
    <div>
        TodoListApp
        <form onSubmit={handleSubmit}>
            <input className='inputText' type="text"
             value={inputText} 
             onChange={handleChange}
             
             />
             
             <button type='submit'>Click</button>
             <br />
             
        </form>

        <div>
                <ul>
                    {task.map((todo, index) => (<Task key={index} taskes = {todo}/>))}
                </ul>
        </div>

    </div>
  )
}
