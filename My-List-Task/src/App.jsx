import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import ToDoAdd from './components/ToDoAdd'
import { useToDo } from './hooks/useToDo'

function App() {
  const {
    todos,
    todosCount,
    peddingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo } = useToDo()


  return (
    <>
      <div className='car-to-do'>
        <h1>My tasks</h1>
        <div className='counter-to-do'>
          <h3>N task: {todosCount}</h3>
          <h3>pendientes: {peddingTodosCount}</h3>
        </div>
        <div className='add-to-do'>
          <h3>New task</h3>
          <ToDoAdd handleNewTodo={handleNewTodo}/>
        </div>
        <ToDoList 
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      </div>
    </>
  )
}

export default App
