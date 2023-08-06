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
import UpdationModel from "./UpdationModel";
import { TaskInfoContext } from "../context/taskInfoContext";
import { OpenDeleteModelContext } from "../context/openDeleteModelContext";

export default function TodoList() {
  const [open_delete_model, set_show_delete_model] = useState(false);
  const [open_edit_model, set_open_edit_model] = useState(false);
  const [task_info, set_task_info] = useState("");
  const [updated_task, set_updated_task] = useState("");
  return (
    <>
      <OpenDeleteModelContext.Provider
        value={{ open_delete_model, set_show_delete_model }}
      >
        <TaskInfoContext.Provider value={{ task_info, set_task_info }}>
          <DeletionModel />
          <UpdationModel
            open_edit_model={open_edit_model}
            set_open_edit_model={set_open_edit_model}
            updated_task={updated_task}
            set_updated_task={set_updated_task}
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
                          set_open_edit_model={set_open_edit_model}
                          set_updated_task={set_updated_task}
                        />
                      }
                    />
                    <Route
                      path=":state"
                      element={
                        <Tasks
                          set_open_edit_model={set_open_edit_model}
                          set_updated_task={set_updated_task}
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
        </TaskInfoContext.Provider>
      </OpenDeleteModelContext.Provider>
    </>
  );
}
