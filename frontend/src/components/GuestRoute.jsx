import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const GuestRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return <Navigate to={"/dashboard"} replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
