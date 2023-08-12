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
import { TaskInfoContext } from "../context/taskInfoContext";
import { OpenDeleteModelContext } from "../context/openDeleteModelContext";
import { useToast } from "../context/toastContext";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeletionModel() {
  const { dispatch } = useContext(TasksContext);
  const { task_info, set_task_info } = useContext(TaskInfoContext);
  const { open_delete_model, set_show_delete_model } = useContext(
    OpenDeleteModelContext
  );
  const { show_hide_toast } = useToast();

  const handle_delete_task = (task_info) => {
    dispatch({ type: "deleted", payload: { task_info } });
    set_show_delete_model(false);
    show_hide_toast("تم حذف المهمة بنجاح");
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
