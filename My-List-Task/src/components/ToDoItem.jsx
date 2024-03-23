import React from "react"
import { BsTrash } from "react-icons/bs";
import ToDoUpdate from "./ToDoUpdate";

export default function ToDoItem(){
    return(
        <li>
            <span>
                <label htmlFor="" className="container-done"></label>
            </span>
            <ToDoUpdate/>
            <button className="btn-delete"><BsTrash /></button>
        </li>
    )
}