import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Profile from "./profile";

// import App from "./profile";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Profile/>
  </StrictMode>
);