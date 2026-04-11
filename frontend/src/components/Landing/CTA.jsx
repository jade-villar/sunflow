import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      id="cta"
      className="cta-section overflow-clip px-4 py-30 bg-slate-900 text-white"
    >
      <div className="flex flex-col items-center gap-5 text-center max-w-7xl mx-auto">
        <div className="text-xs font-semibold tracking-widest uppercase text-yellow-500">
          Start for Free
        </div>
        <h2 className="text-4xl md:text-6xl font-bold font-fraunces leading-tight">
          Your streak starts
          <br />
          <em className="text-yellow-500">today.</em>
        </h2>

        <p className="text-stone-400">
          A simple habit tracker designed to help you stay consistent — without
          the overwhelm.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <Link
            to="/login"
            className="px-8 py-3.5 rounded-full text-stone-200 font-semibold bg-slate-800 border border-slate-700 hover:border-slate-500 transition cursor-pointer"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="px-8 py-3.5 rounded-full text-white font-semibold shadow-yellow-500/20 shadow-around-md hover:shadow-around-lg active:shadow-around-lg bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer"
          >
            Get started
          </Link>
        </div>
        <p className="text-xs text-stone-500 tracking-wide">
          Free to use &bull; No credit card required
        </p>
      </div>
    </section>
  );
};

export default CTA;
