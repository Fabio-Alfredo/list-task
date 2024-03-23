import React from "react"
import { useForm } from "../hooks/useForm"

export default function ToDoAdd({ handleNewTodo }) {

    const { description, onInputChange, onResetForm } = useForm({ description:'',})

    const onFormSubmit = (e) => {
        e.preventDefault()
        

        if (description.length <= 1) return

        let newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }
        console.log(newTodo)
        handleNewTodo(newTodo)
        onResetForm()
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                className="input-add"
                type="text"
                name="description"
                placeholder="insert task"
                value={description}
                onChange={onInputChange}
            >
            </input>
            <button className="btn-add" type="submit"> agregar</button>
        </form>
    )
}