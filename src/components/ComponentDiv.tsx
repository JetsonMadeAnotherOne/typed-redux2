import React from 'react'
import '../index.css'


const ComponentDiv: React.FC = () => {
    const style = {
        background: "yellow",
    }
    return (
        <div style={style} className="box">  </div>
    )
}

export default ComponentDiv