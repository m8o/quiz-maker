import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#386641",
      contrastText: "#f2e8cf",
    },
    secondary: {
      main: "#6a994e",
      contrastText: "#f2e8cf",
    },
    success: {
      main: "#a7c957",
    },
    error: {
      main: "#bc4749",
    },
    background: {
      default: "#f2e8cf",
      paper: "#ffffff",
    },
    text: {
      primary: "#386641",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
