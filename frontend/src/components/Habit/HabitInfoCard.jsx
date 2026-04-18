import { motion } from "motion/react";
import { useHabit } from "../../context/HabitContext";
import { useHabitLog } from "../../context/HabitLogContext";

const HabitInfoCard = () => {
  const { habit } = useHabit();
  const { weeklyLogs } = useHabitLog();

  const completedCount = weeklyLogs?.data?.logs?.filter((log) => log.completed === true).length || 0;
  const scheduledCount = weeklyLogs?.data?.logs?.filter((log) => log.isScheduled === true).length || 0;

  return (
    <motion.section
      className="flex flex-col gap-5 bg-white border border-slate-200 rounded-3xl px-6 py-7 md:px-7 md:py-8 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex gap-2">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100">
          <img
            src={`/icons/${habit?.data?.category?.icon}.svg`}
            className="w-3 aspect-square"
          />
          <span className="text-[11px] uppercase text-yellow-600 font-semibold tracking-wider">
            {habit?.data?.category?.name}
          </span>
        </div>
        <span className="text-[11px] uppercase px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 font-semibold tracking-wider">
          {habit?.data?.frequency}
        </span>
      </div>

      <h1 className="text-3xl font-fraunces font-bold">{habit?.data?.title}</h1>

      <p className="text-sm text-slate-500">{habit?.data?.description}</p>

      <hr className="border-slate-200" />

      <div className="flex justify-between items-center gap-4">
        <div className="flex w-fit items-center gap-1.5 px-3 py-1.5 bg-yellow-100 rounded-full">
          <img src="/icons/flame.svg" className="w-3 aspect-square" />
          <span className="text-xs font-semibold text-yellow-600">
            {habit?.data?.currentStreak
              ? `${habit?.data?.currentStreak} day streak — keep it up!`
              : "No streak yet — start today!"}
          </span>
        </div>

        <div className="hidden md:inline-block text-xs text-slate-500">
          <span className="font-bold text-slate-800">{completedCount}</span>
          <span>&nbsp;of&nbsp;</span>
          <span className="font-bold text-slate-800">{scheduledCount}</span>
          <span>&nbsp;completed this week&nbsp;</span>
        </div>
      </div>
    </motion.section>
  );
};

export default HabitInfoCard;
