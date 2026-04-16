import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  return (
    <main className="min-h-screen px-4 py-30 text-slate-800">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* STATS */}
        <HabitStats />

        {/* HABIT INFO CARD */}
        {isLoading ? <HabitInfoCardSkeleton /> : <HabitInfoCard />}

        {/* WEEKLY LOGS */}
        {isLoading ? <HabitWeeklyLogsSkeleton /> : <HabitWeeklyLogs />}

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
    </main>
  );
};

export default Habit;
