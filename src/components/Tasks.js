import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import tasks from "../tasks.json";
import Task from "./Task";

export default function Tasks() {
  const { state } = useParams();
  let tasksLoader = [];
  if (!state || state === "all") {
    tasksLoader = tasks.map((task) => <Task key={task.id} text={task.text} />);
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
