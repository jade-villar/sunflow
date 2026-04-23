import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { getCsrfToken } from "../api/axios";
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
  const [actionLoading, setActionLoading] = useState(false);

  // Check current user
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getCurrentUser();
        setUser(res);
        await getCsrfToken();
      } catch (err) {
        const isNetworkError = !err?.response;
        const isAuthError = err?.response?.status === 401 || err?.response?.status === 404;

        if (isNetworkError) {
          toast.error("No internet connection. Please check your network.");
        } else if (isAuthError) {
          setUser(null);
        }
      } finally {
        setAuthLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Register user
  const register = async ({ name, email, password }) => {
    setActionLoading(true);
    try {
      const res = await registerUser({ name, email, password });
      setUser(res);
      await getCsrfToken();
      setError("");
    } catch (err) {
      setError(err);
    } finally {
      setActionLoading(false);
    }
  };

  // Login user
  const login = async ({ email, password }) => {
    setActionLoading(true);
    try {
      const res = await loginUser({ email, password });
      setUser(res);
      await getCsrfToken();
      setError("");
    } catch (err) {
      setError(err);
    } finally {
      setActionLoading(false);
    }
  };

  // Logout user
  const logout = async () => {
    setActionLoading(true);
    try {
      await logoutUser();
      setUser(null);
      setError("");
    } catch (err) {
      setError(err);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, error, authLoading, actionLoading, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
