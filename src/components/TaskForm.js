import { Grid, TextField, Button } from "@mui/material";

export default function TaskForm() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField
            id="filled-basic"
            label="أضف مهمة جديدة"
            variant="filled"
            dir="rtl"
            sx={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
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
