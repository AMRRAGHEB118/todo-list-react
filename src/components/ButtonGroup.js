import { ButtonGroup } from "@mui/material";
import Btn from "./Btn";
import { useContext } from "react";
import { btnsContext } from "../context/btnsContext";

export default function Buttons() {
  const buttonData = useContext(btnsContext);
  const buttons = buttonData.map((btn) => (
    <Btn key={btn.id} state={btn.state} text={btn.text} />
  ));

  return (
    <ButtonGroup
      color="secondary"
      aria-label="medium secondary button group"
    >
      {buttons}
    </ButtonGroup>
  );
}
