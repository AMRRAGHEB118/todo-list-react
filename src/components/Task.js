import { Card, Grid, Typography, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { TasksContext } from "../context/tasksContext";

export default function Task({ task: { id, title, content, is_complete } }) {

  const { tasks, set_tasks } = useContext(TasksContext);

  const handle_check = (id) => {
    const updated_tasks = tasks.map((t) => {
      return t.id === id ? { ...t, is_complete: !t.is_complete } : t;
    });
    set_tasks(updated_tasks);
  };

  return (
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
  );
}
