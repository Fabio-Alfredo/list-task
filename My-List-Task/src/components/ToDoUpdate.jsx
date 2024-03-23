import React from "react"
import { AiOutlineEdit } from "react-icons/ai";

export default function ToDoUpdate(){
    return(
        <form >
            <input
                className="input-update"
                type="text"
                placeholder="insert task"
                value="aprender c++"
                onChange="" >
            </input>
            <button className="btn-edit" type="submit"><AiOutlineEdit /></button>
        </form>
    )
}