import { Card, Grid, Typography, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useContext } from "react";
import { TasksContext } from "../context/tasksContext";
import { TaskInfoContext } from "../context/taskInfoContext";
import { OpenDeleteModelContext } from "../context/openDeleteModelContext";
import { UpdatedTaskContext } from "../context/updatedTaskContext";

export default function Task({
  task: { id, title, content, is_complete },
  set_open_edit_model,
}) {
  const { tasks, set_tasks } = useContext(TasksContext);
  const { set_task_info } = useContext(TaskInfoContext);
  const { set_show_delete_model } = useContext(OpenDeleteModelContext);
  const { set_updated_task } = useContext(UpdatedTaskContext);

  const handle_check = (id) => {
    const new_tasks = tasks.map((t) => {
      return t.id === id ? { ...t, is_complete: !t.is_complete } : t;
    });
    set_tasks(new_tasks);
    localStorage.setItem("tasks", JSON.stringify(new_tasks));
  };

  const handle_delete_click_open = () => {
    set_task_info(id);
    set_show_delete_model(true);
  };

  const handle_edit_click_open = () => {
    set_updated_task({ id, title, content });
    set_open_edit_model(true);
  };

  return (
    <>
      <Card sx={{ padding: "10px", margin: "10px" }}>
        <Grid container>
          <Grid item xs={8}>
            <Typography
              variant="h3"
              sx={{ textAlign: "right", marginRight: "20px" }}
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              sx={{ textAlign: "right", marginRight: "20px" }}
            >
              {content}
            </Typography>
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            item
            xs={4}
          >
            <IconButton
              onClick={() => {
                handle_check(id);
              }}
              aria-label="check"
              sx={{
                color: is_complete ? "white" : "#A2FF86",
                background: is_complete ? "#A2FF86" : "white",
                border: "2px solid #A2FF86",
              }}
            >
              <CheckIcon sx={{ fontSize: "14px" }} />
            </IconButton>
            <IconButton
              onClick={handle_edit_click_open}
              aria-label="edit"
              sx={{
                color: "#4FC0D0",
                background: "white",
                border: "2px solid #4FC0D0",
              }}
            >
              <ModeEditOutlineIcon sx={{ fontSize: "14px" }} />
            </IconButton>
            <IconButton
              onClick={handle_delete_click_open}
              aria-label="delete"
              sx={{
                color: "#FF8989",
                background: "white",
                border: "2px solid #FF8989",
              }}
            >
              <DeleteIcon sx={{ fontSize: "14px" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
