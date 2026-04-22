import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "motion/react";
import { useAuth } from "../context/AuthContext";
import ActionLoading from "./Loading/ActionLoading";

const Header = () => {
  const { user, actionLoading, logout } = useAuth();

  const [scrolled, setScrolled] = useState(false);

  const isLanding = useMatch("/");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  // Logout user
  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  };

  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 z-100 p-4 border-b border-gray-900/0 transition ${scrolled && "backdrop-blur-lg bg-surface/80 border-gray-900/10 shadow-around-md"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl m-auto flex justify-between gap-4 items-center">
        <Link
          to={user ? "/dashboard" : "/"}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src="/sunflow.svg" className="w-8 aspect-square" />
          <span className="font-fraunces text-xl font-semibold">sunflow</span>
        </Link>

        {isLanding && (
          <nav className="hidden md:flex items-center gap-8 ml-20 text-sm font-medium">
            <LinkScroll
              to="features"
              smooth={true}
              className="py-1.5 hover:text-gray-600 active:text-gray-800 cursor-pointer transition"
            >
              Features
            </LinkScroll>
            <LinkScroll
              to="how"
              smooth={true}
              className="py-1.5 hover:text-gray-600 active:text-gray-800 cursor-pointer transition"
            >
              How it works
            </LinkScroll>
          </nav>
        )}

        {!user && (
          <div className="flex items-center gap-2">
            <Link
              to={"/login"}
              className="hidden md:grid content-center px-5 py-1.5 border border-gray-900/10 rounded-full text-sm hover:bg-gray-900 hover:border-gray-900 hover:text-white active:bg-gray-900 active:border-gray-900 active:text-white transition cursor-pointer"
            >
              Log in
            </Link>
            <Link
              to={"/register"}
              className="grid content-center px-5 py-1.5 rounded-full text-sm font-semibold bg-yellow-500 text-white shadow-around-btn-sm shadow-yellow-500/30 hover:bg-yellow-480 hover:scale-103 active:scale-97 active:bg-yellow-600 transition cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        )}

        {user && (
          <button
            onClick={handleLogout}
            disabled={actionLoading}
            className="grid content-center px-5 py-1.5 rounded-full text-sm font-semibold bg-yellow-500 text-white shadow-around-btn-sm shadow-yellow-500/30 hover:bg-yellow-480 hover:scale-103 active:scale-97 active:bg-yellow-600 transition cursor-pointer"
          >
            {actionLoading ? <ActionLoading text={"Logging Out"} /> : "Logout"}
          </button>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
