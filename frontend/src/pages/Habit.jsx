import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHabit } from "../context/HabitContext";
import { useHabitLog } from "../context/HabitLogContext";
import HabitStats from "../components/Habit/HabitStats";
import HabitInfoCard from "../components/Habit/HabitInfoCard";
import HabitWeeklyLogs from "../components/Habit/HabitWeeklyLogs";
import HabitActions from "../components/Habit/HabitActions";
import HabitModal from "../components/HabitModal/HabitModal";
import AuthLoading from "../components/AuthLoading";

const Habit = () => {
  const { id } = useParams();
  const { habitLoading, getHabit } = useHabit();
  const { getHabitWeeklyLogs } = useHabitLog();

  const [editingHabit, setEditingHabit] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getHabit({ id });
  }, [id, getHabit]);

  useEffect(() => {
    getHabitWeeklyLogs({ id });
  }, [id, getHabitWeeklyLogs]);

  if (habitLoading) {
    return <AuthLoading />;
  }

  return (
    <main className="min-h-screen px-4 py-30 text-slate-800">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* STATS */}
        <HabitStats />

        {/* HABIT INFO CARD */}
        <HabitInfoCard />

        {/* WEEKLY LOGS */}
        <HabitWeeklyLogs />

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
