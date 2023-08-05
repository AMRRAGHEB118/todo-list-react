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
import { useState } from "react";
import Tasks from "./Tasks";
import TaskForm from "./TaskForm";
import DeletionModel from "./DeletionModel";

export default function TodoList() {
  const [open_delete_model, set_show_delete_model] = useState(false);
  const [task_id, set_task_id] = useState('');
  return (
    <>
      <DeletionModel
        open_delete_model={open_delete_model}
        set_show_delete_model={set_show_delete_model}
        task_id={task_id}
        set_task_id={set_task_id}
      />
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
                <Route
                  index
                  element={
                    <Tasks
                      open_delete_model={open_delete_model}
                      set_show_delete_model={set_show_delete_model}
                      set_task_id={set_task_id}
                    />
                  }
                />
                <Route
                  path=":state"
                  element={
                    <Tasks
                      open_delete_model={open_delete_model}
                      set_show_delete_model={set_show_delete_model}
                      set_task_id={set_task_id}
                    />
                  }
                />
              </Route>
            </Routes>
          </CardContent>
          <CardActions>
            <TaskForm />
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
