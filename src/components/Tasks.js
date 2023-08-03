import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

import Task from "./Task";

export default function Tasks({ tasks, handle_check }) {
  const { state } = useParams();
  let tasksLoader = [];
  if (!state || state === "all") {
    tasksLoader = tasks.map((task) => (
      <Task key={task.id} task={task} handle_check={handle_check} />
    ));
  }

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
