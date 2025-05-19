import { createContext, useContext } from 'react';

// 1. Create the context with default structure
export const TodoContextList = createContext({
  todos: [
    {
      id: 1,
      todoMsg: 'Todo 1',
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  editTodo: (id, todo) => {},
  // toggleCompleted: (id) => {},
});

// 2. Export the raw provider
export const TodoContextProvider = TodoContextList.Provider;

// 3. Custom hook to use context easily
export const useTodoContext = () => {
  return useContext(TodoContextList);
};
