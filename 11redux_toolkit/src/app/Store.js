import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// Configure the store with the todoReducer

export const store = configureStore({
        // Each slice of the state has its own reducer.
    // In this case, we only have the 'todo' slice.
    reducer:todoReducer,   // You can access the todo state using state.todo
})
