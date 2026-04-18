import { useState } from "react";
import { format } from "date-fns";
import { AnimatePresence, motion } from "motion/react";
import { useAuth } from "../context/AuthContext";
import { useCategory } from "../context/CategoryContext";
import { useHabit } from "../context/HabitContext";
import CategoryCard from "../components/Dashboard/CategoryCard";
import StreakCard from "../components/Dashboard/StreakCard";
import ProgressCard from "../components/Dashboard/ProgressCard";
import EmptyHabits from "../components/Dashboard/EmptyHabits";
import HabitModal from "../components/HabitModal/HabitModal";
import CategoryCardSkeleton from "../components/Loading/CategoryCardSkeleton";
import { pageVariant, componentVariant } from "../utils/animations";

const Dashboard = () => {
  const today = format(new Date(), "EEEE, MMMM d");

  const { user } = useAuth();
  const { categories } = useCategory();
  const { habits, habitsLoading } = useHabit();

  const [isOpen, setIsOpen] = useState(false);
  const [editingHabit, setEditingHabit] = useState(null);

  const isInitialLoading = habitsLoading && !habits.length;
  const hasHabits = habits?.length;

  const handleAdd = () => {
    setEditingHabit(null);
    setIsOpen(true);
  };

  return (
    <main className="min-h-screen px-4 py-30 text-slate-800">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 items-start"
        variants={pageVariant}
        initial="hidden"
        animate="visible"
      >
        {/* HEADER */}
        <section className="flex justify-between items-end gap-6 flex-wrap mt-4 mb-6 col-[1/2] md:col-[1/9] lg:col-[1/10] row-[1/2]">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase text-yellow-500 font-medium tracking-wide">
              {today}
            </p>
            <h2 className="text-4xl font-fraunces font-extrabold capitalize">
              Good Day, {user.data.user.name}!
            </h2>
            <p className="text-slate-600 text-sm">
              Keep growing your habits today
            </p>
          </div>

          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm text-white font-semibold shadow-around-sm hover:shadow-around-md active:shadow-around-md bg-slate-900 hover:bg-slate-800 active:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer"
          >
            <span className="w-5 h-5 rounded-full bg-yellow-500">+</span>
            <span>Add Habit</span>
          </button>
        </section>

        {/* MAIN LIST */}
        <motion.section
          className="flex flex-col gap-4 md:gap-6 col-[1/2] md:col-[1/9] lg:col-[1/10] row-[3/4] md:row-[2/3]"
          variants={componentVariant}
        >
          <AnimatePresence mode="wait">
            {isInitialLoading ? (
              <motion.div
                key="skeleton"
                exit={{ opacity: 0 }}
              >
                <CategoryCardSkeleton />
              </motion.div>
            ) : hasHabits ? (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {categories?.map((category) => (
                  <CategoryCard
                    key={category.id}
                    categoryName={category.name}
                  />
                ))}
              </motion.div>
            ) : (
              <EmptyHabits handleAdd={handleAdd} />
            )}
          </AnimatePresence>
        </motion.section>

        {/* SIDEBAR */}
        <motion.section
          className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 mb-6 md:sticky md:top-30 md:self-start col-[1/2] md:col-[9/13] lg:col-[10/13] row-[2/3] md:row-[1/4]"
          variants={componentVariant}
        >
          <StreakCard />
          <ProgressCard isInitialLoading={isInitialLoading} />
        </motion.section>
      </motion.div>

      {/* ADD MODAL */}
      <HabitModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialData={editingHabit}
      />
    </main>
  );
};

export default Dashboard;
