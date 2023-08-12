import { createContext, useReducer } from "react";
import tasksReducer from "../reducers/tasksReducer"

export let TasksContext = createContext([]);

export default function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(tasksReducer, []);
  
    return (
      <TasksContext.Provider value={{ tasks, dispatch }}>
        {children}
      </TasksContext.Provider>
    );
  }