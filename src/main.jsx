import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Driver from "./index.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Driver />
  </StrictMode>
);
