const HowItWorks = () => {
  return (
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
              Name your habit, set category, pick frequency and schedule. Takes
              under 30 seconds per habit.
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
  );
};

export default HowItWorks;
