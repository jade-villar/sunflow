import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { HabitProvider } from "./context/HabitContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HabitProvider>
        <App />
      </HabitProvider>
    </AuthProvider>
  </StrictMode>,
);
