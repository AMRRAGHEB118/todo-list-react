import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

import { useContext } from "react";
import { TasksContext } from "../context/tasksContext";
import { UpdatedTaskContext } from "../context/updatedTaskContext";
import { OpenEditModelContext } from "../context/openEditModelContext";
import { useToast } from "../context/toastContext";

export default function UpdationModel() {
  const { dispatch } = useContext(TasksContext);
  const { updated_task, set_updated_task } = useContext(UpdatedTaskContext);
  const { open_edit_model, set_open_edit_model } =
    useContext(OpenEditModelContext);
  const { show_hide_toast } = useToast();

  const handle_edit_task = (id) => {
    dispatch({
      type: "updated",
      payload: {
        updated_task,
        set_updated_task,
        id,
      },
    });
    set_open_edit_model(false);
    show_hide_toast("تم تعديل المهمة بنجاح");
  };

  const handle_edit_click_close = () => {
    set_open_edit_model(false);
  };

  return (
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
            handle_edit_task(updated_task.id);
          }}
        >
          تعديل
        </Button>
      </DialogActions>
    </Dialog>
  );
}
