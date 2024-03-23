import React from "react"
import ToDoItem from "./ToDoItem"

export default function ToDoList({ todos, handleDeleteTodo, handleCompleteTodo, handleUpdateTodo }) {
    return (
        <ul>
            {
                todos.map(todo => (
                    (
                        <ToDoItem
                            key={todo.id}
                            todo={todo}
                            handleDeleteTodo={handleDeleteTodo}
                            handleCompleteTodo={handleCompleteTodo}
                            handleUpdateTodo={handleUpdateTodo}
                        />
                    )
                )
                )
            }

        </ul>
    )
}