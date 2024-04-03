import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import theme from "./styles/theme.js";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
      <ToastContainer />
    </ThemeProvider>
  </BrowserRouter>
);
