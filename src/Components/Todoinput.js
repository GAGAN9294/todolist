import React, { useState } from 'react'
import '../Styles/TodoInput/index.css'

const Todoinput = (props) => {
    const[inputText,setInputText] = useState('')
    const handleChange = (e) => {
        setInputText(e.target.value)
    }
    const handleClick=()=>{
        props.addlist(inputText)
        setInputText("")
    }
  return (
  <div className="input-container">
        <input className="input-box-todo" type="text" value={inputText} onChange={handleChange} placeholder='enter the name' /><br/><br/>
        <button className="add-btn" onClick={handleClick}> Sumbit </button>
  </div>
  )   
}

export default Todoinput