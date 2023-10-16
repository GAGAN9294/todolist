import { useState } from "react";
import Todoinput from "./Components/Todoinput";
import Todolist from "./Components/Todolist";
import './App.css'


function App() {
  const[listTodo,setListTodo] = useState([])
  const addlist = (inputText) =>{
    if(inputText!==''){
      setListTodo([...listTodo,inputText])
    }
   
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo]
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
  <div className="main">
    <div className="second-main">
    <Todoinput addlist={addlist}/>
    <h1 className="app-heading">DATA</h1>
        <hr/>

  {
    listTodo.map((item,i)=>{
      return (
        <Todolist deleteItem={deleteListItem} key={i} item={item} index={i}/>
      )
    })
  }

    </div>
  
  </div>
  );
}

export default App;
