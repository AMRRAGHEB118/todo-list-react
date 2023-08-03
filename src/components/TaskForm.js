import { Grid, TextField, Button } from "@mui/material";

export default function TaskForm({
  title_input,
  set_title_input,
  handle_add_task,
}) {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField
            value={title_input}
            onChange={(e) => {
              set_title_input(e.target.value);
            }}
            id="filled-basic"
            label="أضف مهمة جديدة"
            variant="filled"
            sx={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={handle_add_task}
            sx={{ width: "100%", height: "100%" }}
            color="primary"
            variant="contained"
          >
            أضف
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
