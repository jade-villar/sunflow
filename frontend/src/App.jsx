import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Habit from "./pages/Habit";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Cookies from "./pages/Cookies.jsx";
import Missing from "./pages/Missing.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import { useAuth } from "./context/AuthContext.jsx";
import AuthLoading from "./pages/AuthLoading.jsx";

function App() {
  const { authLoading } = useAuth();

  if (authLoading) {
    return <AuthLoading />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/habit/:id" element={<Habit />} />
        </Route>

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />

        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
