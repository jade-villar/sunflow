import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useHabit } from "../context/HabitContext";
import { useHabitLog } from "../context/HabitLogContext";
import HabitStats from "../components/Habit/HabitStats";
import HabitInfoCard from "../components/Habit/HabitInfoCard";
import HabitWeeklyLogs from "../components/Habit/HabitWeeklyLogs";
import HabitActions from "../components/Habit/HabitActions";
import HabitModal from "../components/HabitModal/HabitModal";
import HabitInfoCardSkeleton from "../components/Loading/HabitInfoCardSkeleton";
import HabitWeeklyLogsSkeleton from "../components/Loading/HabitWeeklyLogsSkeleton";

const Habit = () => {
  const { id } = useParams();
  const { habitsLoading, habitLoading, getHabit } = useHabit();
  const { weeklyLogsLoading, getHabitWeeklyLogs } = useHabitLog();

  const [editingHabit, setEditingHabit] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const isLoading = habitsLoading || habitLoading || weeklyLogsLoading;

  useEffect(() => {
    getHabit({ id });
  }, [id, getHabit]);

  useEffect(() => {
    getHabitWeeklyLogs({ id });
  }, [id, getHabitWeeklyLogs]);

  const fadeUpPage = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUpComponents = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.main
      className="min-h-screen px-4 py-30 text-slate-800"
      variants={fadeUpPage}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* STATS */}
        <HabitStats />

        {/* HABIT INFO CARD */}
        <motion.div variants={fadeUpComponents}>
          <AnimatePresence mode="wait">
            {isLoading ? <HabitInfoCardSkeleton /> : <HabitInfoCard />}
          </AnimatePresence>
        </motion.div>

        {/* WEEKLY LOGS */}
        <motion.div variants={fadeUpComponents}>
          <AnimatePresence mode="wait">
            {isLoading ? <HabitWeeklyLogsSkeleton /> : <HabitWeeklyLogs />}
          </AnimatePresence>
        </motion.div>

        {/* ACTIONS */}
        <HabitActions
          id={id}
          setEditingHabit={setEditingHabit}
          setIsOpen={setIsOpen}
        />
      </div>

      {/* EDIT MODAL */}
      <HabitModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialData={editingHabit}
      />
    </motion.main>
  );
};

export default Habit;
