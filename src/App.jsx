import "./App.css";

import { useState } from "react";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "Criar funcionalidade X no sistema",
			category: "Trabalho",
			completed: false,
		},
		{
			id: 2,
			text: "Ir para a academia",
			category: "Pessoal",
			completed: false,
		},
		{
			id: 3,
			text: "Estudar React",
			category: "Estudos",
			completed: false,
		},
	]);

	const [search, setSearch] = useState("");

	const [filter, setFilter] = useState("All");
	const [sort, setSort] = useState("Asce");

	function addTodo(text, category) {
		const newTodo = {
			id: Math.floor(Math.random() * 10000),
			text,
			category,
			completed: false,
		};

		setTodos([...todos, newTodo]);
	}

	function removeTodo(id) {
		setTodos(todos.filter(todo => todo.id !== id));
	}

	function completeTodo(id) {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	}

	return (
		<div className="App">
			<h1>Lista de Tarefas</h1>
			<Search search={search} setSearch={setSearch} />
			<Filter
				filter={filter}
				setFilter={setFilter}
				sort={sort}
				setSort={setSort}
			/>
			<div className="todo-list">
				{todos
					.filter(todo =>
						filter === "All"
							? true
							: filter === "Completed"
							? todo.completed
							: !todo.completed
					)
					.filter(todo =>
						todo.text.toLowerCase().includes(search.toLowerCase())
					)
					.sort((a, b) =>
						sort === "Asce"
							? a.text.localeCompare(b.text)
							: b.text.localeCompare(a.text)
					)
					.map(todo => (
						<Todo
							key={todo.id}
							todo={todo}
							removeTodo={removeTodo}
							completeTodo={completeTodo}
						/>
					))}
			</div>
			<TodoForm addTodo={addTodo} />
		</div>
	);
}

export default App;
