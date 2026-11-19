import React, { useState } from 'react'

export default function Colourit() {
const [color,setColor]=useState('pink');

const handlecolorchange=(selectedcolor)=>{
setColor(selectedcolor);

}

  return (
    <div className=' mb-[190px]'>
        <div style={{ backgroundColor: color, padding: '20px', height:'120px', width:'220px' }}>
            <h1>THE SELECTED COLOR: {color.toUpperCase()}</h1>
            <select value={color} onChange={(e)=>handlecolorchange(e.target.value)}>
                <option value='pink'>pink</option>
                <option value='red'>red</option>
                <option value='blue'>blue</option>
                <option value='green'>green</option>
            </select>
        </div>
    </div>

    
  )
}
