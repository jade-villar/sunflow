import { useHabit } from "../../context/HabitContext";

const HabitStats = () => {
  const { habit } = useHabit();

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {/* CURRENT STREAK */}
      <div className="flex flex-col gap-3 bg-slate-900 text-white rounded-3xl p-5 md:p-6 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition">
        <img src="/icons/flame.svg" className="w-5 aspect-square mb-1" />
        <div className="text-[11px] text-slate-400 font-semibold tracking-wider">
          CURRENT STREAK
        </div>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold font-fraunces">
            {habit?.data?.currentStreak}
          </span>
          <span className="text-sm text-slate-400 mb-px">days</span>
        </div>
      </div>

      {/* BEST STREAK */}
      <div className="flex flex-col gap-3 bg-white border border-slate-200 rounded-3xl p-5 md:p-6 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition">
        <img src="/icons/trophy.svg" className="w-5 aspect-square mb-1" />
        <div className="text-[11px] text-slate-400 font-semibold tracking-wider">
          BEST STREAK
        </div>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold font-fraunces">
            {habit?.data?.longestStreak}
          </span>
          <span className="text-sm mb-px">days</span>
        </div>
      </div>

      {/* TOTAL COMPLETED */}
      <div className="hidden md:flex flex-col gap-3 bg-white border border-slate-200 rounded-3xl p-5 md:p-6 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition">
        <img src="/icons/check.svg" className="w-5 aspect-square mb-1" />
        <div className="text-[11px] text-slate-400 font-semibold tracking-wider">
          TOTAL COMPLETED
        </div>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold font-fraunces">
            {habit?.data?.totalCompleted}
          </span>
          <span className="text-sm mb-px">times</span>
        </div>
      </div>
    </section>
  );
};

export default HabitStats;
