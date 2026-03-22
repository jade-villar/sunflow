const StreakCard = ({ streakHabits }) => {
  return (
    <div className="flex flex-col gap-4 bg-white border border-slate-200 rounded-3xl p-6 md:p-6 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition">
      <p className="text-xs text-slate-400 font-semibold tracking-wider">
        STREAKS
      </p>
      <div className="bg-slate-900 rounded-xl px-4 py-6 flex items-center justify-center gap-4">
        <img src="/flame.svg" className="w-14 h-14 animate-scale" />

        <div className="flex flex-col items-start gap-1">
          <h2 className="font-fraunces text-white text-5xl font-bold">
            {streakHabits}
          </h2>

          <p className="text-xs text-slate-400 text-start">
            {streakHabits === 1 ? "habit on a streak" : "habits on a streak"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StreakCard;
