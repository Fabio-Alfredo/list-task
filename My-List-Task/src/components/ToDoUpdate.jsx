import React from "react"
import { AiOutlineEdit } from "react-icons/ai";

export default function ToDoUpdate({todo, handleUpdateTodo}){
    return(
        <form >
            <input
                className="input-update"
                type="text"
                placeholder="insert task"
                value={todo.description}
                onChange="" >
            </input>
            <button className="btn-edit" type="submit"><AiOutlineEdit /></button>
        </form>
    )
}