import { deepPurple, grey, indigo, lightBlue } from "@mui/material/colors";

const theme = {
  palette: {
    primary: indigo,
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: deepPurple,
          secondary: lightBlue,
          info: {
            main: grey[50],
            light: "#1a237e",
          },
          success: {
            main: "#673ab7",
            light: "#d1c4e9",
            contrastText: "#673ab7",
          },
          divider: deepPurple,
          background: {
            default: grey[50],
            paper: indigo,
          },
          shape: {
            borderRadius: 8,
          },
          text: {
            primary: grey[900],
            secondary: grey[400],
          },
          spacing: 8,
        }
      : {
          // palette values for dark mode
          primary: deepPurple,
          secondary: indigo,
          info: {
            main: grey[50],
            light: "#03a9f4",
          },
          success: {
            main: "#9575cd",
            light: "#d1c4e9",
            contrastText: "#d1c4e9",
          },
          divider: lightBlue,
          background: {
            default: grey[900],
            paper: lightBlue,
          },
          shape: {
            borderRadius: 8,
          },
          text: {
            primary: grey[50],
            secondary: grey[400],
          },
          spacing: 8,
        }),
  },
});

export default theme;
