import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import Task from "./Task";
import { useContext } from "react";
import { TasksContext } from "../context/tasksContext";

export default function Tasks() {
  const {tasks} = useContext(TasksContext)
  const { state } = useParams();
  let tasksLoader = [];
  let tasks_to_be_rendered;
  if (!state || state === "all") {
    tasks_to_be_rendered = tasks;
  } else if (state === "done") {
    tasks_to_be_rendered = tasks.filter((task) =>
      task.is_complete ? task : null
    );
  } else
    tasks_to_be_rendered = tasks.filter((task) =>
      !task.is_complete ? task : null
    );

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
