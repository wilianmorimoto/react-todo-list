import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
	return (
		<div>
			<div
				className="todo"
				style={{ textDecoration: todo.completed ? "line-through" : "", opacity: todo.completed && '.5', transition: '.2s'}}>
				<div className="content">
					<p>{todo.text}</p>
					<p className="category">({todo.category})</p>
				</div>
				<div>
					<button onClick={() => completeTodo(todo.id)} className="complete">
						Completar
					</button>
					<button onClick={() => removeTodo(todo.id)} className="remove">
						X
					</button>
				</div>
			</div>
		</div>
	);
};

export default Todo;
