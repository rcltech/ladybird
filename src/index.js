import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { theme } from "./config/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider as ChakraThemeProvider } from "@chakra-ui/core";
import { theme as chakraTheme } from "@chakra-ui/core";
import CSSReset from "@chakra-ui/core/dist/CSSReset";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ChakraThemeProvider theme={chakraTheme}>
      <CssBaseline />
      <CSSReset />
      <App />
    </ChakraThemeProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
