import { createSlice, nanoid } from '@reduxjs/toolkit';

// Initial state of the todo slice. It starts with one default todo.
const initialState = {
  todos: [{ id: 1, text: "Hello world" }]
};

// Creating the slice using createSlice, which automatically generates actions and reducer.
export const todoSlice = createSlice({
  name: 'todo', // Name of the slice (used for naming the action types).
  initialState, // The initial state defined above.
  reducers: {
    // Reducer for adding a new todo item.
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generate a unique ID for each new todo.
        text: action.payload // The text of the todo comes from the action's payload.
      };
      
      // If the text is empty or just spaces, don't add the todo.
      if (todo.text.trim() === "") return; 

      state.todos.push(todo); // Add the new todo to the state array.
    },

    // Reducer for removing a todo item by its ID.
    removeTodo: (state, action) => {
      // Filter the todos array to remove the todo with the matching ID.
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

// Exporting the actions generated by createSlice (addTodo and removeTodo).
export const { addTodo, removeTodo } = todoSlice.actions;

// Export the reducer function as the default export, to be used in the store.
export default todoSlice.reducer;
