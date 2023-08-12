import { createContext, useReducer, useContext } from "react";
import tasksReducer from "../reducers/tasksReducer";

const TasksContext = createContext([]);

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => {
  return useContext(TasksContext)
};
