import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
  Button,
} from "@mui/material";
import { useContext, forwardRef } from "react";
import { TasksContext } from "../context/tasksContext";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeletionModel({
  open_delete_model,
  set_show_delete_model,
  task_info,
  set_task_info,
}) {
  const { tasks, set_tasks } = useContext(TasksContext);

  const handle_delete_task = (task_info) => {
    const new_tasks = tasks.filter((t) => {
      return t.id !== task_info;
    });
    set_tasks(new_tasks);
    localStorage.setItem("tasks", JSON.stringify(new_tasks));
    set_show_delete_model(false);
  };

  const handle_delete_close = () => {
    set_task_info("");
    set_show_delete_model(false);
  };

  return (
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
          "تحذير: أنت على وشك إزالة هذه المهمة بشكل دائم. لا يمكن التراجع عن هذا
          الإجراء. هل أنت متأكد أنك تريد المتابعة؟"
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handle_delete_close}>أغلاق</Button>
        <Button
          onClick={() => {
            handle_delete_task(task_info);
          }}
        >
          حذف
        </Button>
      </DialogActions>
    </Dialog>
  );
}
