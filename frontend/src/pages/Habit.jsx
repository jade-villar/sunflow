import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useHabit } from "../context/HabitContext";
import { useHabitLog } from "../context/HabitLogContext";
import HabitStats from "../components/Habit/HabitStats";
import HabitInfoCard from "../components/Habit/HabitInfoCard";
import HabitWeeklyLogs from "../components/Habit/HabitWeeklyLogs";
import HabitModal from "../components/HabitModal/HabitModal";
import AuthLoading from "../components/AuthLoading";

const Habit = () => {
  const { id } = useParams();
  const { habit, habitLoading, getHabit, deleteHabit } = useHabit();
  const { getHabitWeeklyLogs, completeHabit } = useHabitLog();

  const [editingHabit, setEditingHabit] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getHabit({ id });
  }, [id, getHabit]);

  useEffect(() => {
    getHabitWeeklyLogs({ id });
  }, [id, getHabitWeeklyLogs]);

  const handleEdit = () => {
    setEditingHabit(habit.data);
    setIsOpen(true);
  };

  const handleDelete = async () => {
    await deleteHabit({ id });
    navigate("/dashboard");
  };

  const handleComplete = async () => {
    await completeHabit({ id });
    await getHabit({ id });
    await getHabitWeeklyLogs({ id });
  };

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
        <div className="flex justify-between items-center text-sm">
          <button
            onClick={handleComplete}
            className={`flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold shadow-around-md hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer
              ${
                habit?.data?.isCompletedToday
                  ? "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-600 shadow-emerald-100"
                  : "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 shadow-yellow-100"
              }
            `}
          >
            {habit?.data?.isCompletedToday ? (
              <span>✓&nbsp;&nbsp;Completed!</span>
            ) : (
              <span>✦&nbsp;&nbsp;Mark Complete</span>
            )}
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="px-6 py-3 bg-white border border-slate-200 rounded-full hover:bg-slate-900 hover:border-slate-900 hover:text-white active:bg-slate-900 active:border-slate-900 active:text-white transition cursor-pointer"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="px-6 py-3 rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white transition cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
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
