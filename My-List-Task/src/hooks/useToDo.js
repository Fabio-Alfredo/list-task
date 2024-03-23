import { useReducer } from "react"
import { todoreducer } from "../todoreducer"

export const useToDo = () => {

    const initialState = []

    const [todos, dispatch] = useReducer(todoreducer, initialState, init)

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