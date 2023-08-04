import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import Task from "./Task";

export default function Tasks({ tasks, handle_check }) {
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
    <Task key={task.id} task={task} handle_check={handle_check} />
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
