import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { getCurrentUser } from "../services/userServices";
import { loginUser, logoutUser, registerUser } from "../services/authServices";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [authLoading, setAuthLoading] = useState(true);

  // Check current user
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getCurrentUser();
        setUser(res);
        localStorage.setItem("has_session", "true");
      } catch (err) {
        const isAuthError = err?.response?.status === 401 || err?.response?.status === 404;
        const isNetworkError = !err?.response;

        if (isAuthError) {
          setUser(null);
        } else if (isNetworkError) {
          const hasSession = localStorage.getItem("has_session");

          if (hasSession) {
            window.location.reload();
          }

          toast.error("No internet connection. Please check your network.");
        }
      } finally {
        setAuthLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Register user
  const register = async ({ name, email, password }) => {
    setAuthLoading(true);
    try {
      const res = await registerUser({ name, email, password });
      setUser(res);
      setError("");
    } catch (err) {
      setError(err);
    } finally {
      setAuthLoading(false);
    }
  };

  // Login user
  const login = async ({ email, password }) => {
    setAuthLoading(true);
    try {
      const res = await loginUser({ email, password });
      setUser(res);
      setError("");
    } catch (err) {
      setError(err);
    } finally {
      setAuthLoading(false);
    }
  };

  // Logout user
  const logout = async () => {
    setAuthLoading(true);
    try {
      await logoutUser();
      localStorage.removeItem("has_session");
      setUser(null);
      setError("");
    } catch (err) {
      setError(err);
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, error, authLoading, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
