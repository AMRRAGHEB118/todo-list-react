import {
  Container,
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
} from "@mui/material";
import Buttons from "./ButtonGroup";
import { btnsContext } from "../context/btnsContext";
import buttonsData from "../buttonsData.json";
import { Route, Routes } from "react-router-dom";
import Tasks from "./Tasks";
import TaskForm from "./TaskForm";

export default function SimpleContainer() {
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h2">مهامي</Typography>
          <br />
          <Divider />
          <br />
          <btnsContext.Provider value={buttonsData}>
            <Buttons />
          </btnsContext.Provider>
          <br />
          <br />
          <Routes>
            <Route path="/">
              <Route index element={<Tasks />} />
              <Route path=":state" element={<Tasks />} />
            </Route>
          </Routes>
        </CardContent>
        <CardActions>
          <TaskForm />
        </CardActions>
      </Card>
    </Container>
  );
}
