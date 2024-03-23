import { useEffect, useReducer } from "react"
import { todoreducer } from "../todoreducer"

export const useToDo = () => {

    const initialState = []

    const [todos, dispatch] = useReducer(todoreducer, initialState, init)

    const todosCount = todos.length
    const peddingTodosCount = todos.filter(todo=>!todo.done).length

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const init=()=>{
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const handleNewTodo = (todo) => {
        const action = {
            type: "Add Todo",
            payload: todo
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: "Delete Todo",
            payload: id
        }
        dispatch(action)
    }

    const handleCompleteTodo = (id) => {
        const action = {
            type: "Complete Todo",
            payload: id
        }
        dispatch(action)
    }

    const handleUpdateTodo = (id, description) => {
        const action = {
            type: "Update Todo",
            payload: {
                id, description
            }
        }
        dispatch(action)
    }

    return {
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo
    }

}