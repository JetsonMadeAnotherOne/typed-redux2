import React from 'react'
import '../index.css'


const onBtn = () => {
    console.log('hi')
}
const ComponentButton: React.FC = () => {
    return (
        <div>
            <button onClick={onBtn}>Click me!</button>
        </div>
    )
}
export default ComponentButton
