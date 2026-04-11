import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero overflow-clip bg-surface min-h-screen px-4 py-35">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
        <img
          src="/sunflow.svg"
          className="w-10 aspect-square animate-slow-spin"
        />

        <h1 className="text-7xl md:text-9xl font-fraunces font-bold leading-snug">
          Grow your <span className="text-yellow-500">Habits.</span>
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-slate-500 leading-relaxed">
          Track your daily wins, maintain streaks, and grow one small habit at a
          time. Your future self starts today.
        </p>

        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mt-6">
          <Link
            to="/register"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold shadow-stone-900/20 shadow-around-md hover:shadow-around-lg active:shadow-around-lg bg-slate-900 hover:bg-slate-800 active:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer"
          >
            <span className="w-6 h-6 rounded-full bg-yellow-500">✦</span>
            <span>Start tracking</span>
          </Link>
          <LinkScroll
            to="features"
            smooth={true}
            className="flex items-center gap-2 px-8 py-4 rounded-full text-slate-800 font-semibold bg-white border border-stone-200 hover:border-stone-800 active:border-stone-800 transition cursor-pointer"
          >
            <span>▶</span>
            <span>See how it works</span>
          </LinkScroll>
        </div>

        <img
          src="/dashboard.png"
          className="hidden md:block max-w-5xl w-full mt-15 border rounded-3xl border-stone-200 hover:border-stone-300 shadow-around-md hover:shadow-around-lg shadow-stone-300 transition"
        />
      </div>
    </section>
  );
};

export default Hero;
