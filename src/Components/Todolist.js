import React from 'react'
import '../Styles/Todolist/index.css'

const Todolist = (props) => {
  return (
    <div>
        <li className="list-item">
            { props.item}
           
            <span className='icons'
            onClick={()=>{
                props.deleteItem(props.index)
            }}>
            <i className="fa-solid fa-trash-can icon-delete" 
            ></i>
            </span>
        </li>
    </div>
  )
}

export default Todolist