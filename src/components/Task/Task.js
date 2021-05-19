import React, {useEffect, useState } from 'react';
import "./task.css";

const Task = ({todos, settodos}) => {
    const [uncompleted, setumcompleted] = useState(todos);
    const [completed, setcompleted] = useState([]);
    const [isTrue, setisTrue] = useState([])

    useEffect(() => {
        let uncompletedTask = todos.filter((item) => item.isChecked === false);
            setumcompleted(uncompletedTask);
            let completedTask =  isTrue.filter((item) => item.isChecked === true);
            setcompleted(completedTask);        
    }, [todos, isTrue])

    useEffect(() => {
        if(todos.length === 0){
            setisTrue([]);
        }
    }, [todos])

    const isChecked = (id) => {
            let updatedToDoList = todos.map((item) => {
                if(item.id === id){
                    item.isChecked = !item.isChecked;
                    if(item.isChecked === true){
                        let newCompleted = [...completed];
                        newCompleted.unshift(item);
                        setisTrue(newCompleted);
                    }
                }
                return(
                    item
             )
           });
           settodos(updatedToDoList);
    }

    return (
        <div className = "task">
            {uncompleted.map((item, i) => (
                <div key ={i} className ="item-block">  
                    <input onChange ={() => isChecked(item.id)} type ="checkbox" checked = {item.isChecked}/>
                    <input className ="todo-item" value = {item.listItem} onChange = {(e) => e.preventDefault()}/>
                </div>
                
            ))}
            <p className = {completed.length === 0 ? "not-empty": "completed"}>Completed Task</p>
            {completed.map((item, i) => (
                <div key ={i+100} className ="item-block">  
                    <input onChange ={() => isChecked(item.id)} type ="checkbox" checked = {item.isChecked}/>
                    <input className ="todo-item" value = {item.listItem} onChange = {(e) => e.preventDefault()}/>
                </div>
            ))}
        </div>
    );
};

export default Task;