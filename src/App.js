import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material";
import { TasksContext } from "./context/tasksContext";
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
        <TasksContext.Provider value={{tasks, set_tasks}}>
          <TodoList />
        </TasksContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
