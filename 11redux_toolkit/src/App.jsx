import { useState } from 'react'
import './App.css'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodos></AddTodos>
      <Todos></Todos>
    </>
  )
}

export default App
