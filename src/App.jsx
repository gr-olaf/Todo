import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from './store/todoSlice'

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import './app.css'

function App() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const addTask = () => {
		dispatch(addTodo({ text }));
		setText('');
	};

	return (
		<div className="app">
			<InputField
				text={text}
				handleInput={setText}
				handleSubmit={addTask}
			/>

			<TodoList />
		</div>
	);
}

export default App;
