import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/userService";
import { loginUser, logoutUser, registerUser } from "../services/authService";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check current user
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getCurrentUser();
        setUser(res);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Register user
  const register = async ({ name, email, password }) => {
    const res = await registerUser({ name, email, password });
    setUser(res);
  };

  // Login user
  const login = async ({ email, password }) => {
    const res = await loginUser({ email, password });
    setUser(res);
  };

  // Logout user
  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
