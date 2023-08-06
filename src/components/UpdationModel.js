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

export default function UpdationModel({
  open_edit_model,
  set_open_edit_model,
}) {
  const { tasks, set_tasks } = useContext(TasksContext);
  const {updated_task, set_updated_task} = useContext(UpdatedTaskContext);

  const handle_edit_task = (id) => {
    const new_tasks = tasks.map((t) => {
      return t.id === id
        ? { ...t, title: updated_task.title, content: updated_task.content }
        : t;
    });
    set_tasks(new_tasks);
    localStorage.setItem("tasks", JSON.stringify(new_tasks));
    set_updated_task("");
    set_open_edit_model(false);
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
