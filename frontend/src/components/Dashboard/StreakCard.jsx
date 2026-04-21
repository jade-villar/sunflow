import CountUp from "react-countup";
import { useHabit } from "../../context/HabitContext";

const StreakCard = () => {
  const { habits } = useHabit();

  const streakHabits = habits?.filter((habit) => habit.currentStreak > 0).length || 0;

  const bestStreak = habits?.reduce((max, h) => Math.max(max, h.currentStreak || 0), 0) ?? 0;
  const totalDone = habits?.reduce((sum, h) => sum + (h.totalCompleted || 0), 0) ?? 0;

  return (
    <div className="flex flex-col gap-5 bg-white border border-gray-200 rounded-3xl p-5 md:p-6 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition">
      <p className="text-xs text-gray-400 font-semibold tracking-wider">
        STREAKS
      </p>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-900 rounded-xl p-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <img
            src="/icons/flame.svg"
            className="w-10 md:w-14 aspect-square animate-scale"
          />

          <div className="flex md:flex-col items-end md:items-start gap-2.5 md:gap-1">
            <h2 className="font-fraunces text-white text-4xl md:text-5xl font-bold">
              <CountUp end={streakHabits} duration={0.6} />
            </h2>

            <p className="md:hidden text-xs text-gray-400 text-start mb-1">
              {streakHabits === 1 ? "habit" : "habits"}
            </p>

            <p className="hidden md:block text-xs text-gray-400 text-start">
              {streakHabits === 1 ? "habit on a streak" : "habits on a streak"}
            </p>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-3">
          <div className="bg-gray-100 border border-gray-200 rounded-xl p-3 flex flex-col items-center justify-center gap-1">
            <h3 className="font-fraunces text-3xl font-bold">
              <CountUp end={bestStreak} duration={0.6} />
            </h3>
            <p className="text-[10px] text-gray-400 font-semibold tracking-wider text-center">
              BEST STREAK
            </p>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-xl p-3 flex flex-col items-center justify-center gap-1">
            <h3 className="font-fraunces text-3xl font-bold">
              <CountUp end={totalDone} duration={0.6} />
            </h3>
            <p className="text-[10px] text-gray-400 font-semibold tracking-wider text-center">
              TOTAL DONE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakCard;
