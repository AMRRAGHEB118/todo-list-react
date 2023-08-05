import { Grid, TextField, Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { TasksContext } from "../context/tasksContext";

export default function TaskForm() {

  const { tasks, set_tasks } = useContext(TasksContext);
  const [title_input, set_title_input] = useState("");

useEffect(()=> {
if(localStorage.getItem('tasks')) {
  set_tasks(JSON.parse(localStorage.getItem('tasks')))
}
},[])

  const handle_add_task = () => {
    const new_task = {
      id: tasks.length + 1,
      title: title_input,
      content: "hello",
      is_complete: false,
    };
    set_tasks([...tasks, new_task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, new_task]))
    set_title_input("");
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField
            value={title_input}
            onChange={(e) => {
              set_title_input(e.target.value);
            }}
            id="filled-basic"
            label="أضف مهمة جديدة"
            variant="filled"
            sx={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={handle_add_task}
            sx={{ width: "100%", height: "100%" }}
            color="primary"
            variant="contained"
          >
            أضف
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
