import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const GuestRoute = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={"/dashboard"} replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
