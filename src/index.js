import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // optional: Tailwind or custom styles

// React 18 way of rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
