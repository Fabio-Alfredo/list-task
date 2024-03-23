import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import ToDoAdd from './components/ToDoAdd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='car-to-do'>
        <h1>My tasks</h1>
        <div className='counter-to-do'>
          <h3>N task: 5</h3>
          <h3>pendientes: 3</h3>
        </div>
        <div className='add-to-do'>
          <h3>New task</h3>
          <ToDoAdd />
        </div>
        <ToDoList />
      </div>
    </>
  )
}

export default App
