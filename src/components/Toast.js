import { forwardRef } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar({ open, toast_message }) {

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        // message="Note archived"
      >
        <Alert severity="success" sx={{ width: "100%" }}>
         {toast_message}
        </Alert>
      </Snackbar>
    </div>
  );
}
