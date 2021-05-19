import React, { useState, useEffect } from 'react';
import "./App.css";
import Input from "./components/input";
import Task from "./components/Task/Task";
import Header from "./components/Header/header";

const App = () => {
    const [todos, settodos] = useState([]);
    console.log(todos);

	useEffect(() => {
		const data1 = localStorage.getItem("stringWhereWeStoreData");
		const loadedData = JSON.parse(data1);

		if(loadedData){
			settodos(loadedData);
		}
	}, [])

	useEffect(() => {
		var data1 = JSON.stringify(todos);
		localStorage.setItem("stringWhereWeStoreData", data1);
	}, [todos])

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