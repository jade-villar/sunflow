import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";

const Header = () => {
  const matchRegister = useMatch("/register");
  const matchLogin = useMatch("/login");
  const matchDashboard = useMatch("/dashboard");

  const isAuthMatch = matchRegister || matchLogin || matchDashboard;

  return (
    <header className="fixed w-full px-4 py-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 flex-wrap">
        <div className="flex items-center gap-4">
          <img src="/sunflow.svg" className="w-7 h-7" />
          <div
            className={`${isAuthMatch ? "text-gray-800" : "text-white"} lg:text-white text-2xl/relaxed font-extrabold`}
          >
            sunflow
          </div>
        </div>

        <div
          className={`${isAuthMatch ? "hidden" : "block"} flex items-center gap-4`}
        >
          <Link
            to={"/login"}
            className="px-6 py-1.5 border-2 rounded-md border-white text-white font-semibold cursor-pointer hover:bg-yellow-600 hover:border-yellow-600 active:bg-yellow-600 active:border-yellow-600 transition"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="px-6 py-1.5 border-2 rounded-md border-yellow-500 bg-yellow-500 text-white font-semibold cursor-pointer hover:bg-yellow-600 hover:border-yellow-600 active:bg-yellow-600 active:border-yellow-600 transition"
          >
            Register
          </Link>
        </div>

        {matchDashboard && (
          <button className="px-6 py-1.5 border-2 rounded-md border-yellow-500 bg-yellow-500 text-white font-semibold cursor-pointer hover:bg-yellow-600 hover:border-yellow-600 active:bg-yellow-600 active:border-yellow-600 transition">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
