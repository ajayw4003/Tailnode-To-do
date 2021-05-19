import React, { useState } from 'react';
import "./App.css";
import Input from "./components/input";
import Task from "./components/Task/Task";
import Header from "./components/Header/header";

const App = () => {
    const [todos, settodos] = useState([]);
    return (
        <div className =  "container">
            <div className = {todos.length >= 4 ? "block1" : "block"}>
                <Header settodos = {settodos}/>
                <Input todos = {todos} settodos = {settodos}/>
                <Task todos = {todos} settodos = {settodos}/>
            </div>
        </div>
    );
};

export default App;