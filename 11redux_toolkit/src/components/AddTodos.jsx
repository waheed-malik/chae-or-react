import React, { useState } from 'react' // Import React and the useState hook
import { useDispatch } from 'react-redux' // Import the useDispatch hook to dispatch actions to Redux
import { addTodo } from '../features/todo/todoSlice' // Import the addTodo action from the todo slice

function AddTodos() {
  // useState hook to handle the input value
  const [input, setInput] = useState('')
  
  // useDispatch hook to get the dispatch function, which is used to send actions to Redux store
  const dispatch = useDispatch()

  // Function to handle form submission
  const addTodoHandler = (e) => {
    e.preventDefault() // Prevent the default form submission (page refresh)
    
    // Check if input is not just empty or spaces before dispatching the addTodo action
    if (input.trim() !== "") { 
      dispatch(addTodo(input)) // Dispatch the addTodo action with the input as the payload
      setInput('') // Reset the input field after dispatching
    }
  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      {/* Input field for entering todo text */}
      <input
        type="text"
        className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none
         text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        placeholder='Enter a Todo...' // Placeholder text in the input field
        value={input} // Bind the input field value to the state
        onChange={(e) => setInput(e.target.value)} // Update the state as the user types
      />
      
      {/* Button to submit the form */}
      <button
        type='submit'
        className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodos
