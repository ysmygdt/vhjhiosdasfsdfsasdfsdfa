import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/global.css";
import Default from "./components/Default";

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <App />
    <GlobalStyle />
  </>
);
