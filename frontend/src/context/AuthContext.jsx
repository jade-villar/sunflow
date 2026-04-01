import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/userService";
import { loginUser, logoutUser, registerUser } from "../services/authService";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Check current user
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getCurrentUser();
        setUser(res);
      } catch {
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Register user
  const register = async ({ name, email, password }) => {
    setAuthLoading(true);
    const res = await registerUser({ name, email, password });
    setUser(res);
    setAuthLoading(false);
  };

  // Login user
  const login = async ({ email, password }) => {
    setAuthLoading(true);
    const res = await loginUser({ email, password });
    setUser(res);
    setAuthLoading(false);
  };

  // Logout user
  const logout = async () => {
    setAuthLoading(true);
    await logoutUser();
    setUser(null);
    setAuthLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, authLoading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
