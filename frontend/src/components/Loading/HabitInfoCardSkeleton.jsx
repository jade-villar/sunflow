import { motion } from "motion/react";

const HabitInfoCardSkeleton = () => {
  return (
    <motion.section
      className="flex flex-col gap-5 bg-white border border-gray-200 rounded-3xl px-6 py-7 md:px-7 md:py-8 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition"
      exit={{ opacity: 0 }}
    >
      <div className="flex gap-2">
        <span className="w-24 h-6 rounded-full bg-amber-100 animate-pulse"></span>
        <span className="w-24 h-6 rounded-full bg-emerald-100 animate-pulse"></span>
      </div>

      <span className="max-w-80 h-9 rounded-sm bg-gray-300 animate-pulse"></span>

      <span className="max-w-40 h-5 rounded-sm bg-gray-300 animate-pulse"></span>

      <hr className="border-gray-200" />

      <div className="flex justify-between items-center gap-4">
        <span className="w-48 h-7 rounded-full bg-amber-100 animate-pulse"></span>
        <span className="w-36 h-4 rounded-sm bg-gray-300 animate-pulse"></span>
      </div>
    </motion.section>
  );
};

export default HabitInfoCardSkeleton;
