import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/style/index.css";
import App from "./App.jsx";
import { AuthProvider } from "./authContext/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
