import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import Task from "./Task";
import { useMemo } from "react";
import { useTasks } from "../context/tasksContext";

export default function Tasks() {
  const { tasks } = useTasks();
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
    <Task key={task.id} task={task} />
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
