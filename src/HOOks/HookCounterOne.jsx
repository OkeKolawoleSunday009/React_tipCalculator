import React, {useState, useEffect} from 'react'

export default function HookCounterOne() {

    const [count, setCount] = useState(0)
    useEffect(() =>{
       document.title = `you clicked ${count} times` 
    })
  return (
    <div>
        HookCounterOne <br />
        <button onClick={() => setCount(count + 1)}>
        Clicked {count}
        </button>
    </div>
  )
}