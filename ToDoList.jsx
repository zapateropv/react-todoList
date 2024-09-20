import React, {useState} from 'react'
import './ToDoList.css'
export default function ToDoList(){

const [tasks,setTask] = useState(["Eat Breakfast"])
const [newTask, setNewTask] = useState("")



const addTask = () => {
    if(newTask == ""){

    }
    else{
        setTask(tasks => ([...tasks, newTask]))
        setNewTask("")
    }
   
}

const setOnChange = (e) =>{
    setNewTask(e.target.value)
}

const deleteTask = (index) => {

    setTask(tasks.filter((_, i) =>  i !== index))
}

const moveUp = (index) => {

   if(index > 0){
    const updatedTask = [...tasks];
   
    [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
    setTask(updatedTask);
   }
    
}

const moveDown = (index) => {

    if(index < tasks.length - 1){
        const updatedTask = [...tasks];
   
        [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
        setTask(updatedTask);
    }
   
}



return(
<>
    <div className="ListContainer">
        <div className="listh1">
             <h1>
                To-Do-List
             </h1>
        </div>
        <div className="listInput">
            <input type="text" value={newTask} onChange={setOnChange}/>   
            <button onClick={addTask}>
                Add
            </button> 
        </div>              
    </div>
    <ol className="listOl">
        {tasks.map((task, index) =><div className="mainDiv"><li key={index} className="listLi">
                                    <span className="doList">{task}</span>
                                    <button className="DeleteBtn" onClick={() => deleteTask(index)}>Delete</button>
                                    <button className="UpBtn" onClick={() => moveUp(index)}>Up</button>
                                    <button className="DownBtn" onClick={() => moveDown(index)}>Down</button></li></div> )}
    </ol>
    <br></br>
    <hr></hr>
</>)

}