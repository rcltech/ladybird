import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        light: "#727394",
        main: "#464866",
        dark: "#1d213b",
      },
      secondary: {
        main: "#ef9a9a",
      },
      background: {
        default: "#fff",
      },
      error: {
        main: "#B00020",
      },
      user: {
        main: "#ce93d8",
      },
      others: {
        main: "#9fa8da",
      },
    },
    typography: {
      h1: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 200,
        fontSize: "4em",
        margin: "20px 0",
      },
      h2: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 200,
        margin: "20px 0",
        fontSize: "3em",
      },
      h3: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 200,
        fontSize: "2em",
        margin: "20px 0",
      },
      h4: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 200,
        margin: "20px 0",
      },
      h5: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 200,
        fontSize: "1em",
      },
      h6: {
        fontFamily: "Roboto, sans-serif",
        fontWeight: 400,
        fontSize: "1em",
      },
      subtitle1: {
        fontFamily: "Roboto, sans-serif",
        fontWeight: 600,
      },
      subtitle2: {
        fontFamily: "Roboto, sans-serif",
        fontWeight: 200,
      },
      button: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 300,
      },
    },
  })
);
