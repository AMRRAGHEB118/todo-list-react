import { Card, Grid, Typography, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Task({ title, content, state }) {
  return (
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
            aria-label="check"
            sx={{
              color: "#A2FF86",
              background: "white",
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
  );
}
