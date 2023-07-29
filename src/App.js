import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Lateef"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
