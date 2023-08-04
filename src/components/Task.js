import {
  Card,
  Grid,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Slide,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useState, useContext, forwardRef } from "react";
import { TasksContext } from "../context/tasksContext";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Task({ task: { id, title, content, is_complete } }) {
  const { tasks, set_tasks } = useContext(TasksContext);
  const [open, setOpen] = useState(false);

  const handle_check = (id) => {
    const updated_tasks = tasks.map((t) => {
      return t.id === id ? { ...t, is_complete: !t.is_complete } : t;
    });
    set_tasks(updated_tasks);
  };

  const handle_delete_task = (id) => {
    const updated_tasks = tasks.filter((t) => {
      return t.id !== id;
    });
    set_tasks(updated_tasks);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"حذف المهمة؟"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          "تحذير: أنت على وشك إزالة هذه المهمة بشكل دائم. لا يمكن التراجع عن هذا الإجراء. هل أنت متأكد أنك تريد المتابعة؟"
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>أغلاق</Button>
          <Button
            onClick={() => {
              handle_delete_task(id);
            }}
          >
            حذف
          </Button>
        </DialogActions>
      </Dialog>
      <Card sx={{ padding: "10px", margin: "10px" }}>
        <Grid container>
          <Grid item xs={8}>
            <Typography
              variant="h3"
              sx={{ textAlign: "right", marginRight: "20px" }}
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              sx={{ textAlign: "right", marginRight: "20px" }}
            >
              {content}
            </Typography>
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            item
            xs={4}
          >
            <IconButton
              onClick={() => {
                handle_check(id);
              }}
              aria-label="check"
              sx={{
                color: is_complete ? "white" : "#A2FF86",
                background: is_complete ? "#A2FF86" : "white",
                border: "2px solid #A2FF86",
              }}
            >
              <CheckIcon sx={{ fontSize: "14px" }} />
            </IconButton>
            <IconButton
              aria-label="edit"
              sx={{
                color: "#4FC0D0",
                background: "white",
                border: "2px solid #4FC0D0",
              }}
            >
              <ModeEditOutlineIcon sx={{ fontSize: "14px" }} />
            </IconButton>
            <IconButton
              onClick={handleClickOpen}
              aria-label="delete"
              sx={{
                color: "#FF8989",
                background: "white",
                border: "2px solid #FF8989",
              }}
            >
              <DeleteIcon sx={{ fontSize: "14px" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
