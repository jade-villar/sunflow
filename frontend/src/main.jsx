import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CategoryProvider } from "./context/CategoryContext.jsx";
import { HabitProvider } from "./context/HabitContext.jsx";
import { HabitLogProvider } from "./context/HabitLogContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CategoryProvider>
        <HabitProvider>
          <HabitLogProvider>
            <App />
          </HabitLogProvider>
        </HabitProvider>
      </CategoryProvider>
    </AuthProvider>
  </StrictMode>,
);
