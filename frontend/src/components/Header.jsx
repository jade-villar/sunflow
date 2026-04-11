import { useEffect, useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  const [scrolled, setScrolled] = useState(false);

  const isLanding = useMatch("/");

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  // Logout user
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header
      className={`fixed w-full z-100 p-4 text-slate-800 border-b border-slate-900/0 transition ${scrolled && "backdrop-blur-lg bg-surface/80 border-slate-900/10 shadow-around-md"}`}
    >
      <div className="max-w-7xl m-auto flex justify-between gap-4 items-center">
        <div className="flex items-center gap-3">
          <img src="/sunflow.svg" className="w-8 aspect-square" />
          <span className="font-fraunces text-xl font-semibold">sunflow</span>
        </div>

        {isLanding && (
          <nav className="hidden md:flex items-center gap-8 ml-20 text-sm font-medium">
            <LinkScroll
              to="features"
              smooth={true}
              className="py-1.5 hover:text-slate-700 active:text-slate-700 cursor-pointer transition"
            >
              Features
            </LinkScroll>
            <LinkScroll
              to="how"
              smooth={true}
              className="py-1.5 hover:text-slate-700 active:text-slate-700 cursor-pointer transition"
            >
              How it works
            </LinkScroll>
          </nav>
        )}

        {!user && (
          <div className="flex items-center gap-2">
            <Link
              to={"/login"}
              className="hidden md:grid content-center px-5 py-1.5 border border-slate-900/10 rounded-full text-sm hover:bg-slate-900 hover:border-slate-900 hover:text-white active:bg-slate-900 active:border-slate-900 active:text-white transition cursor-pointer"
            >
              Log in
            </Link>
            <Link
              to={"/register"}
              className="grid content-center px-5 py-1.5 rounded-full text-sm font-semibold bg-yellow-500 text-white shadow-around-sm shadow-yellow-500/30 hover:bg-yellow-600 hover:-translate-y-px active:bg-yellow-600 transition cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        )}

        {user && (
          <button
            onClick={handleLogout}
            className="grid content-center px-5 py-1.5 rounded-full text-sm font-semibold bg-yellow-500 text-white shadow-around-sm shadow-yellow-500/30 hover:bg-yellow-600 hover:-translate-y-px active:bg-yellow-600 transition cursor-pointer"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
