import React, { useEffect, useState } from 'react'

export default function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)

    }
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mouseover', logMousePosition)
    }, [])
  return (
    <div>

        Hooks X - {x} Y - {y}
        
        <br/>

        dddddddddddddd
    </div>
  )
}
