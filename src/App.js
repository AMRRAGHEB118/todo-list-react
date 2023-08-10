import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material";
import { TasksContext } from "./context/tasksContext";
import { ToastProvider } from "./context/toastContext";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Lateef"],
  },
});

function App() {
  const initial_tasks = [];
  const [tasks, set_tasks] = useState(initial_tasks);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ToastProvider>
          <TasksContext.Provider value={{ tasks, set_tasks }}>
            <TodoList />
          </TasksContext.Provider>
        </ToastProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
