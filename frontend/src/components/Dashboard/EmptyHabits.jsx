import { motion } from "motion/react";

const EmptyHabits = ({ handleAdd }) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 py-10 md:py-25"
      key="empty"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src="/icons/seedling.svg" className="w-8 aspect-square" />
      <h3 className="text-2xl font-fraunces font-bold">No Habits Yet</h3>
      <p className="text-gray-400 text-sm">
        Start building your routine by adding your first habit.
      </p>
      <button
        onClick={handleAdd}
        className="flex items-center gap-1.5 mt-2 px-5 py-2.5 text-sm font-semibold rounded-full shadow-around-sm shadow-yellow-500/30 text-white bg-yellow-500 hover:bg-yellow-480 active:bg-yellow-600 cursor-pointer hover:scale-103 active:scale-97 transition"
      >
        <span>+</span>
        <span>Add Habit</span>
      </button>
    </motion.div>
  );
};

export default EmptyHabits;
