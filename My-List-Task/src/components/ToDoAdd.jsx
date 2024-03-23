import React from "react"

export default function ToDoAdd() {
    return (
        <form >
            <input
                className="input-add"
                type="text"
                placeholder="insert task"
                value="aprender c++"
                onChange="" >
            </input>
            <button className="btn-add" type="submit">agregar</button>
        </form>
    )
}