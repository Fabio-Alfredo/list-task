import React from "react"
import { BsTrash } from "react-icons/bs";
import ToDoUpdate from "./ToDoUpdate";

export default function ToDoItem({ todo, handleDeleteTodo, handleCompleteTodo, handleUpdateTodo }) {
    return (
        <li>
            <span
                onClick={() => handleCompleteTodo(todo.id)}
            >
                <label className={`container-done ${todo.done ? 'active':''}` }></label>
            </span>

            <ToDoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />

            <button
                className="btn-delete"
                onClick={() => handleDeleteTodo(todo.id)}
            >
                <BsTrash />
            </button>
        </li>
    )
}