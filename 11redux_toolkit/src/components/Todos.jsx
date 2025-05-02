import React from 'react'
import { useSelector, useDispatch } from 'react-redux' // Importing hooks to interact with Redux store
import { removeTodo } from '../features/todo/todoSlice' // Importing the removeTodo action

function Todos() {
  // Selecting the todos array from the Redux state
  const todos = useSelector(state => state.todos)

  // Getting the dispatch function to dispatch actions to the store
  const dispatch = useDispatch() // Fixed typo: 'dsipatch' to 'dispatch'

  return (
    <>
      <div>Todos</div>
      <ul className='list-none'>
        {/* Iterating through todos and rendering each one */}
        {todos.map((todo) => (
          <li
            className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
            key={todo.id} // Each todo should have a unique key
          >
            {/* Display the todo text */}
            <div className='text-white'> {todo.text}</div>

            {/* Button to remove the todo item */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))} // Dispatch removeTodo action with todo.id as payload
              className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
            >
              {/* You could add text like 'Delete' or an icon here */}
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
