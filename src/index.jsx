import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { lazy } from "react";

const App = lazy(() => import("./App.jsx"));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
