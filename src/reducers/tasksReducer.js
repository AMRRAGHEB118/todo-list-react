export default function reducer(current_todos, action) {
  switch (action.type) {
    case "added": {
      const new_task = {
        id: current_todos.length + 1,
        title: action.payload.title_input,
        content: "",
        is_complete: false,
      };

      const updated_tasks = [...current_todos, new_task];
      localStorage.setItem("tasks", JSON.stringify(updated_tasks));

      return updated_tasks;
    }

    case "deleted": {
      const updated_tasks = current_todos.filter((t) => {
        return t.id !== action.payload.task_info;
      });
      localStorage.setItem("tasks", JSON.stringify(updated_tasks));
      return updated_tasks;
    }

    case "updated": {
      const updated_tasks = current_todos.map((t) => {
        return t.id === action.payload.id
          ? {
              ...t,
              title: action.payload.updated_task.title,
              content: action.payload.updated_task.content,
            }
          : t;
      });
      localStorage.setItem("tasks", JSON.stringify(updated_tasks));
      action.payload.set_updated_task({
        id: "",
        title: "",
        content: "",
      });
      return updated_tasks;
    }
    case "checked": {
      const updated_tasks = current_todos.map((t) => {
        return t.id === action.payload.id
          ? { ...t, is_complete: !t.is_complete }
          : t;
      });
      localStorage.setItem("tasks", JSON.stringify(updated_tasks));
      return updated_tasks;
    }
    case "get": {
      const storage_tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
      return storage_tasks;
    }
    default: {
      throw Error("unknown Action" + action.type);
    }
  }
}
