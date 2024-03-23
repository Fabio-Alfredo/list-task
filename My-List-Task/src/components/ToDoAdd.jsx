import React from "react"

export default function ToDoAdd() {

    const onFormSubmit=(e)=>{
        e.preventDefault()
    }

    return (
        <form onSubmit={onFormSubmit}>
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