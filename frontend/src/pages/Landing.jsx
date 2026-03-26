import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Landing = () => {
  // relative after:content-[''] after:absolute after:-bottom-5 after:right-0 after:left-0 after:h-1 after:bg-yellow-500/40 after:rounded-full after:-z-10

  return (
    <main className="text-slate-800">
      {/* HERO */}
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
            Track your daily wins, maintain streaks, and grow one small habit at
            a time. Your future self starts today.
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

      {/* FEATURES */}
      <section id="features" className="px-4 py-30 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 space-y-5">
            <div className="text-xs font-semibold tracking-widest uppercase text-yellow-500">
              Features
            </div>
            <h2 className="max-w-2xl text-4xl md:text-5xl font-bold font-fraunces leading-tight">
              Everything you need to&nbsp;
              <em className="text-yellow-500">stay consistent</em>
            </h2>
            <p className="text-stone-400 max-w-lg">
              Simple, focused tools designed to build momentum — not overwhelm
              you.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8 hover:border-yellow-500 hover:shadow-around-md hover:shadow-yellow-500/10 active:border-yellow-500 active:shadow-around-md active:shadow-yellow-500/10 transition duration-300">
              <div className="w-11 aspect-square rounded-xl bg-yellow-500/20 flex items-center justify-center text-xl mb-4">
                🔥
              </div>
              <div className="text-lg font-semibold font-fraunces mb-2">
                Streak Tracking
              </div>
              <div className="text-stone-400 text-sm leading-relaxed">
                Watch your streak grow day by day. Missing a day resets your
                count, creating a powerful motivation to show up — even on hard
                days.
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8 hover:border-emerald-500 hover:shadow-around-md hover:shadow-emerald-500/10 active:border-emerald-500 active:shadow-around-md active:shadow-emerald-500/10 transition duration-300">
              <div className="w-11 aspect-square rounded-xl bg-emerald-500/20 flex items-center justify-center text-xl mb-4">
                📊
              </div>
              <div className="text-lg font-semibold font-fraunces mb-2">
                Progress at a Glance
              </div>
              <div className="text-stone-400 text-sm leading-relaxed">
                A clean daily dashboard shows exactly where you stand — no
                scrolling, no digging. Your progress ring updates in real time
                as you complete habits.
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8 hover:border-yellow-500 hover:shadow-around-md hover:shadow-yellow-500/10 active:border-yellow-500 active:shadow-around-md active:shadow-yellow-500/10 transition duration-300">
              <div className="w-11 aspect-square rounded-xl bg-yellow-500/20 flex items-center justify-center text-xl mb-4">
                🗓️
              </div>
              <div className="text-lg font-semibold font-fraunces mb-2">
                Flexible Schedules
              </div>
              <div className="text-stone-400 text-sm leading-relaxed">
                Set habits to repeat daily, or on specific weekdays. Sunflow
                adapts to how your life actually works, not a rigid template.
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8 hover:border-emerald-500 hover:shadow-around-md hover:shadow-emerald-500/10 active:border-emerald-500 active:shadow-around-md active:shadow-emerald-500/10 transition duration-300">
              <div className="w-11 aspect-square rounded-xl bg-emerald-500/20 flex items-center justify-center text-xl mb-4">
                🏷️
              </div>
              <div className="text-lg font-semibold font-fraunces mb-2">
                Categories & Tags
              </div>
              <div className="text-stone-400 text-sm leading-relaxed">
                Organize habits by Health, Productivity, Learning, Finance and
                more. Filter your view to focus on what matters most right now.
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8 hover:border-yellow-500 hover:shadow-around-md hover:shadow-yellow-500/10 active:border-yellow-500 active:shadow-around-md active:shadow-yellow-500/10 transition duration-300">
              <div className="w-11 aspect-square rounded-xl bg-yellow-500/20 flex items-center justify-center text-xl mb-4">
                🎉
              </div>
              <div className="text-lg font-semibold font-fraunces mb-2">
                One-tap Completion
              </div>
              <div className="text-stone-400 text-sm leading-relaxed">
                Mark a habit done with a single tap. A satisfying animation
                confirms it — small celebrations that keep you coming back.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="px-4 py-30">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-5">
            <div className="text-xs font-semibold tracking-widest uppercase text-yellow-500">
              How it Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-fraunces leading-tight">
              Up and running in
              <br />
              <em className="text-yellow-500">3 simple steps</em>
            </h2>
            <p className="text-stone-500">
              No complicated setup, no overwhelming onboarding. Just habits.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-15 gap-x-10 relative group">
            <hr className="hidden md:block absolute top-9 right-[17%] left-[17%] border-dashed border-stone-300 group-hover:border-yellow-500 transition duration-300" />

            <div className="z-10 flex flex-col items-center text-center">
              <div className="w-18 aspect-square rounded-full flex items-center justify-center text-2xl font-bold font-fraunces mb-6 bg-yellow-500 text-white shadow-around-md shadow-yellow-200">
                1
              </div>
              <div className="text-lg font-semibold font-fraunces mb-4">
                Create your habits
              </div>
              <div className="text-stone-500 text-sm leading-relaxed">
                Name your habit, set category, pick frequency and schedule.
                Takes under 30 seconds per habit.
              </div>
            </div>

            <div className="z-10 flex flex-col items-center text-center">
              <div className="w-18 aspect-square rounded-full flex items-center justify-center text-2xl font-bold font-fraunces mb-6 bg-yellow-500 text-white shadow-around-md shadow-yellow-200">
                2
              </div>
              <div className="text-lg font-semibold font-fraunces mb-4">
                Show up every day
              </div>
              <div className="text-stone-500 text-sm leading-relaxed">
                Your dashboard greets you each day with your habits. Mark them
                complete as you go.
              </div>
            </div>

            <div className="z-10 flex flex-col items-center text-center">
              <div className="w-18 aspect-square rounded-full flex items-center justify-center text-2xl font-bold font-fraunces mb-6 bg-yellow-500 text-white shadow-around-md shadow-yellow-200">
                3
              </div>
              <div className="text-lg font-semibold font-fraunces mb-4">
                Watch yourself grow
              </div>
              <div className="text-stone-500 text-sm leading-relaxed">
                Streaks grow, your total completions climb, and the habits that
                seemed hard become second nature.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            A simple habit tracker designed to help you stay consistent —
            without the overwhelm.
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
    </main>
  );
};

export default Landing;
