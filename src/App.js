import React from 'react';
import './App.css';
import { TodoCounter } from './component/TodoCounter';
import { TodoSearch } from './component/TodoSearch';
import { TodoList } from './component/TodoList';
import { CreateTodoButton } from './component/CreateTodoButton';
import { TodoItem } from './component/TodoItem';

const todo = [
	{ text: 'tarea 1', completed: false },
	{ text: 'tarea 2', completed: false },
	{ text: 'tarea 3', completed: false },
];

function App() {
	return (
		<>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{/* {TodoSearch.map((todo) => (
					<TodoItem />
				))} */}
			</TodoList>
			<CreateTodoButton />
		</>
	);
}

export default App;
