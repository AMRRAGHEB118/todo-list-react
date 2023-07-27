import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Btn({ state, text }) {
  return (
    <Link to={`${state}`}>
      <Button>{text}</Button>
    </Link>
  );
}
