// import { Link } from "react-router-dom";
// import { useMatch } from "react-router-dom";

const Header = () => {
  // const matchRegister = useMatch("/register");
  // const matchLogin = useMatch("/login");
  // const matchDashboard = useMatch("/dashboard");

  // const isAuthMatch = matchRegister || matchLogin;

  return (
    <nav className="sticky top-0 z-50 px-4 py-4 text-slate-800 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl m-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/sunflow.svg" className="w-7 h-7" />
            <span className="font-fraunces text-xl font-semibold">sunflow</span>
          </div>

          <div className="flex gap-2">
            <button className="px-5 py-1.5 border border-slate-200 rounded-full text-sm hover:bg-slate-900 hover:border-slate-900 hover:text-white active:bg-slate-900 active:border-slate-900 active:text-white transition cursor-pointer">
              Log in
            </button>
            <button className="px-5 py-1.5 rounded-full text-sm font-semibold bg-yellow-500 text-white shadow-lg shadow-yellow-100 hover:bg-yellow-600 hover:-translate-y-px active:bg-yellow-600 transition cursor-pointer">
              Register
            </button>
          </div>
        </div>
      </nav>
    // <header className="fixed w-full px-4 py-6 z-50">
    //   <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 flex-wrap">
    //     <div className="flex items-center gap-4">
    //       <img src="/sunflow.svg" className="w-7 h-7" />
    //       <div
    //         className={`${isAuthMatch ? "text-gray-800" : "text-white"} text-2xl font-extrabold`}
    //       >
    //         sunflow
    //       </div>
    //     </div>

    //     <div
    //       className={`${isAuthMatch || matchDashboard ? "hidden" : "block"} flex items-center gap-4`}
    //     >
    //       <Link
    //         to={"/login"}
    //         className="px-6 py-1.5 border-2 rounded-md border-white text-white font-semibold cursor-pointer hover:bg-yellow-600 hover:border-yellow-600 active:bg-yellow-600 active:border-yellow-600 transition"
    //       >
    //         Login
    //       </Link>
    //       <Link
    //         to={"/register"}
    //         className="px-6 py-1.5 border-2 rounded-md border-yellow-500 bg-yellow-500 text-white font-semibold cursor-pointer hover:bg-yellow-600 hover:border-yellow-600 active:bg-yellow-600 active:border-yellow-600 transition"
    //       >
    //         Register
    //       </Link>
    //     </div>

    //     {matchDashboard && (
    //       <button className="px-6 py-1.5 border-2 rounded-md border-yellow-500 bg-yellow-500 text-white font-semibold cursor-pointer hover:bg-yellow-600 hover:border-yellow-600 active:bg-yellow-600 active:border-yellow-600 transition">
    //         Logout
    //       </button>
    //     )}
    //   </div>
    // </header>
  );
};

export default Header;
