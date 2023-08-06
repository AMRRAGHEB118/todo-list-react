import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import Task from "./Task";
import { useContext, useMemo } from "react";
import { TasksContext } from "../context/tasksContext";

export default function Tasks({ set_show_delete_model, set_open_edit_model, set_updated_task }) {
  const { tasks } = useContext(TasksContext);
  const { state } = useParams();

  let tasksLoader = [];
  let tasks_to_be_rendered;

  const completed_tasks = useMemo(() => {
    return tasks.filter((task) => (task.is_complete ? task : null));
  }, [tasks]);

  const not_completed_tasks = useMemo(() => {
    return tasks.filter((task) => (!task.is_complete ? task : null));
  }, [tasks]);

  if (!state || state === "all") {
    tasks_to_be_rendered = tasks;
  } else if (state === "done") {
    tasks_to_be_rendered = completed_tasks;
  } else {
    tasks_to_be_rendered = not_completed_tasks;
  }

  tasksLoader = tasks_to_be_rendered.map((task) => (
    <Task set_updated_task={set_updated_task} set_show_delete_model={set_show_delete_model} set_open_edit_model={set_open_edit_model} key={task.id} task={task} />
  ));

  return (
    <>
      <Card sx={{ background: "#c1c1c17a", margin: "10px", minWidth: 275 }}>
        <CardContent>
          {tasksLoader.length > 0 ? (
            tasksLoader
          ) : (
            <Typography variant="h3">من فاضلك أدخل مهمة</Typography>
          )}
        </CardContent>
      </Card>
    </>
  );
}
