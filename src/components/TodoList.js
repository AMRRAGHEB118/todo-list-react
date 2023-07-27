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
import Task from "./Task";
// import Done from "./Done";
// import NontDone from "./NotDone";

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
            <Route path="/" element={<Task />}>
              <Route path=":state" element={<Task />} />
            </Route>
          </Routes>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Container>
  );
}
