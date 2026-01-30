import { createRoot } from "react-dom/client";
import { App } from "@/app/App";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "@/redux/initStore";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xs425: 425,
      sm: 600,
      sm750: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
);
