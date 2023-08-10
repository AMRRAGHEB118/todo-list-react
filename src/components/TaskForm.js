import { Grid, TextField, Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { TasksContext } from "../context/tasksContext";
import { useToast } from "../context/toastContext";

export default function TaskForm() {
  const [title_input, set_title_input] = useState("");
  const { tasks, set_tasks } = useContext(TasksContext);
  const { show_hide_toast } = useToast()

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      set_tasks(JSON.parse(localStorage.getItem("tasks")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handle_add_task = () => {
    const new_task = {
      id: tasks.length + 1,
      title: title_input,
      content: "",
      is_complete: false,
    };
    set_tasks([...tasks, new_task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, new_task]));
    set_title_input("");
    show_hide_toast("تم أضافة المهمة بنجاح");
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
            disabled={title_input.length < 3}
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
