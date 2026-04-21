import { motion } from "motion/react";
import HabitLogLegends from "../Habit/HabitLogLegends";

const HabitWeeklyLogsSkeleton = () => {
  const habitDayLog = Array.from({ length: 7 });

  return (
    <motion.section
      className="flex flex-col gap-6 bg-white border border-gray-200 rounded-3xl px-6 py-7 md:px-7 md:py-8 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition"
      exit={{ opacity: 0 }}
    >
      <div className="text-xs text-gray-400 font-bold tracking-wider flex justify-between items-center gap-4 mb-4">
        <p>WEEKLY HISTORY</p>
        <span className="w-28 h-4 rounded-sm bg-gray-300 animate-pulse"></span>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {habitDayLog.map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span className="w-5 md:w-6 h-3.75 rounded-full bg-gray-300 animate-pulse"></span>
            <span className="w-full max-w-13 aspect-square bg-gray-300 rounded-xl hover:scale-105 transition animate-pulse"></span>
            <span className="w-5 md:w-6 h-3.75 rounded-full bg-gray-300 animate-pulse"></span>
          </div>
        ))}
      </div>

      <hr className="border-gray-200" />

      <HabitLogLegends />
    </motion.section>
  );
};

export default HabitWeeklyLogsSkeleton;
