import React, { useState } from 'react'

export default function CreateArea(props) {
    const [note , setNote] = useState({
        title : " ",
        content : " "
      })
    

    const  handleChange = (e) => {
        const {name, value} = e.target;

        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote (e){
        e.preventDefault();
        props.onAdd(note);
    }

    
  return (
    <div>
        <form action="" >

            <input type="text" 
            onChange={handleChange}
            value = {note.title}
            name='title' 
            placeholder='Title' />

            <textarea name="content"
            value = {note.content} 
            placeholder='Take a note......' id=""
             cols="30" rows="3">
             </textarea>
            <button onClick={submitNote}>Add</button>
        </form>
    </div>
  )
  }