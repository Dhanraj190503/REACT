import { createContext, useContext } from "react";

export const TodoContext = createContext(
    {
        todos:[{
            id:1,
            todo: "Todo 1",
            completed: false,
        }],
        addTodo: (todo) => {},
        deleteTodo: (id) => {},
        updatedTodo: (id, todo) => {},
        toggleComplete: (id) =>{},
    }
);

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = () => {
    return useContext(TodoContext);
}