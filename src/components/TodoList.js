import {
  Container,
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
} from "@mui/material";
import Buttons from "./ButtonGroup";
import { btnsContext } from "../context/btnsContext";
import buttonsData from "../buttonsData.json";
import { Route, Routes } from "react-router-dom";
import Tasks from "./Tasks";
import TaskForm from "./TaskForm";
import { TasksContext } from "../context/tasksContext";
import { useState, useContext } from "react";

export default function TodoList() {
  const { tasks, set_tasks } = useContext(TasksContext);

  const [title_input, set_title_input] = useState("");

  const handle_add_task = () => {
    const new_task = {
      id: tasks.length + 1,
      title: title_input,
      content: "hello",
      is_complete: false,
    };
    set_tasks([...tasks, new_task]);
    set_title_input("");
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h2">مهامي</Typography>
          <br />
          <Divider />
          <br />
          <btnsContext.Provider value={buttonsData}>
            <Buttons />
          </btnsContext.Provider>
          <br />
          <br />
          <Routes>
            <Route path="/">
              <Route index element={<Tasks />} />
              <Route path=":state" element={<Tasks />} />
            </Route>
          </Routes>
        </CardContent>
        <CardActions>
          <TaskForm
            set_title_input={set_title_input}
            title_input={title_input}
            handle_add_task={handle_add_task}
          />
        </CardActions>
      </Card>
    </Container>
  );
}
