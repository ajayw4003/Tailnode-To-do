import React, { useState } from 'react';
import "./input.css";

const Input = ({todos, settodos}) => {
    const [input, setinput] = useState("");

    const handleChange = (val) => {
        setinput(val);
    }

    const random = () => {
        return Math.floor(Math.random()*100);
    }

    const handleKey = (keyCode) => {
        if(keyCode === 13){
            if(input !== ""){
                let newToDo = {
                    id : random(),
                    listItem: input,
                    isChecked: false,
                }
                let updatedToDoList = [...todos];
                updatedToDoList.unshift(newToDo);
                settodos(updatedToDoList);
                setinput("");
            }else{
                return;
            }
        }
    }
        


    return (
        <div className = "inputHeader">
            <input
                className = "input"
                type = "text" 
                placeholder = "Add a task"
                value = {input}
                onChange = {(e) =>handleChange(e.target.value)}
                onKeyUp = {(e) => handleKey(e.keyCode)}
                />
        </div>
    );
};

export default Input;