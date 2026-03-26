import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="px-4 pb-12 pt-16 text-slate-800 flex flex-col gap-14">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center gap-4">
        <p className="text-2xl font-black font-fraunces">sunflow</p>
        <div className="flex items-center gap-4 md:gap-6">
          <Link to={"https://www.linkedin.com/in/jade-villar/"} target="_blank" className="cursor-pointer">
            <img
              src="/linkedin-logo.svg"
              className="w-5 aspect-square invert-15 hover:invert-0 transition"
            />
          </Link>
          <Link to={"https://github.com/jade-villar"} target="_blank" className="cursor-pointer">
            <img
              src="/github-logo.svg"
              className="w-5.5 aspect-square invert-15 hover:invert-0 transition"
            />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full text-stone-500 text-xs md:text-sm flex justify-between items-center gap-4">
        <p>&copy; {today.getFullYear()} sunflow. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to={"/privacy"} className="cursor-pointer">
            <p className="hover:text-slate-800 active:text-slate-800 transition">
              Privacy
            </p>
          </Link>
          <Link to={"/terms"} className="cursor-pointer">
            <p className="hover:text-slate-800 active:text-slate-800 transition">
              Terms
            </p>
          </Link>
          <Link to={"cookies"} className="cursor-pointer">
            <p className="hover:text-slate-800 active:text-slate-800 transition">
              Cookies
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
