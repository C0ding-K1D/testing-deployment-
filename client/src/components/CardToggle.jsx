import { Paper } from "@mui/material";

function CardToggle({ children }) {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#512da8",
        color: "#eee",
        fontWeight: "bold",
        borderRadius: "2rem",
      }}
    >
      {children}
    </Paper>
  );
}

export default CardToggle;
