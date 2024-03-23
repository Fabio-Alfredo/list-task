import React,{useState, useRef} from "react"
import { AiOutlineEdit } from "react-icons/ai";
import { useForm } from "../hooks/useForm";

export default function ToDoUpdate({todo, handleUpdateTodo}){
   
    const[disable, setDisable]=useState(true)
    const focusInputRef =useRef()

    const {updateDescription, onInputChange, }=useForm({
        updateDescription:todo.description
    })

    const onSubmitUpdate=(e)=>{
        e.preventDefault()

        const id = todo.id
        const description = updateDescription

        handleUpdateTodo(id, description)

        setDisable(!disable)
        focusInputRef.current.focus()
    }

    return(
        <form onSubmit={onSubmitUpdate}>
            <input
                className={`input-update ${todo.done ? 'text-decoration-dashed':''}`}
                type="text"
                name="updateDescription"
                placeholder="insert task"
                value={updateDescription}
                onChange={onInputChange}
                readOnly={disable}
                ref={focusInputRef}
                >
            </input>
            <button className="btn-edit" type="submit"><AiOutlineEdit /></button>
        </form>
    )
}