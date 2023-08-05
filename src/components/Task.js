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
  TextField,
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
  const [open_delete_model, set_open_delete_model] = useState(false);
  const [open_edit_model, set_open_edit_model] = useState(false);
  const [updated_task, set_updated_task] = useState({ title, content });

  const handle_check = (id) => {
    const new_tasks = tasks.map((t) => {
      return t.id === id ? { ...t, is_complete: !t.is_complete } : t;
    });
    set_tasks(new_tasks);
  };

  const handle_delete_task = (id) => {
    const new_tasks = tasks.filter((t) => {
      return t.id !== id;
    });
    set_tasks(new_tasks);
  };

  const handle_edit_task = (id) => {
    const new_tasks = tasks.map((t) => {
      return t.id === id ? { ...t, ...updated_task } : t;
    });
    set_tasks(new_tasks);
    set_open_edit_model(false);
  };

  const handle_delete_click_open = () => {
    set_open_delete_model(true);
  };

  const handle_delete_close = () => {
    set_open_delete_model(false);
  };

  const handle_edit_click_open = () => {
    set_open_edit_model(true);
  };

  const handle_edit_click_close = () => {
    set_open_edit_model(false);
  };
  return (
    <>
      <Dialog
        open={open_delete_model}
        TransitionComponent={Transition}
        keepMounted
        onClose={handle_delete_close}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"حذف المهمة؟"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            "تحذير: أنت على وشك إزالة هذه المهمة بشكل دائم. لا يمكن التراجع عن
            هذا الإجراء. هل أنت متأكد أنك تريد المتابعة؟"
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handle_delete_close}>أغلاق</Button>
          <Button
            onClick={() => {
              handle_delete_task(id);
            }}
          >
            حذف
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open_edit_model} onClose={handle_edit_click_close}>
        <DialogTitle>تعديل مهمة</DialogTitle>
        <DialogContent>
          <TextField
            value={updated_task.title}
            onChange={(e) =>
              set_updated_task({ ...updated_task, title: e.target.value })
            }
            autoFocus
            margin="dense"
            id="name"
            label="أسم مهمة"
            type="test"
            fullWidth
            variant="standard"
          />
          <TextField
            value={updated_task.content}
            onChange={(e) =>
              set_updated_task({ ...updated_task, content: e.target.value })
            }
            autoFocus
            margin="dense"
            id="name"
            label="شرح المهمة"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handle_edit_click_close}>أغلاق</Button>
          <Button
            onClick={() => {
              handle_edit_task(id);
            }}
          >
            تعديل
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
              onClick={handle_edit_click_open}
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
              onClick={handle_delete_click_open}
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
