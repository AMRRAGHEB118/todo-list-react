import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material";
import { ToastProvider } from "./context/toastContext";
import TasksProvider from "./context/tasksContext";

const theme = createTheme({
  typography: {
    fontFamily: ["Lateef"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ToastProvider>
          <TasksProvider>
            <TodoList />
          </TasksProvider>
        </ToastProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
