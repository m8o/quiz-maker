import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
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
      default: "#ffffff",
      paper: "#f2e8cf",
      card: "#ffffff",
      button: "#ffffff",
      dark: "#386641",
    },
    text: {
      primary: "#386641",
      white: "#ffffff",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
