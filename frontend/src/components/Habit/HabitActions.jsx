import { useNavigate } from "react-router-dom";
import { useHabit } from "../../context/HabitContext";
import { useHabitLog } from "../../context/HabitLogContext";

const HabitActions = ({ id, setEditingHabit, setIsOpen }) => {
  const { habit, getHabit, deleteHabitWithUndo } = useHabit();
  const { completeHabit, getHabitWeeklyLogs } = useHabitLog();

  const navigate = useNavigate();

  let buttonStyle = "";
  let buttonLabel = "";
  let buttonIcon = "";

  if (habit?.data?.isCompletedToday) {
    buttonStyle = "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-600 shadow-emerald-100";
    buttonLabel = "Completed!";
    buttonIcon = "✓";
  } else if (!habit?.data?.isScheduledToday) {
    buttonStyle = "bg-slate-400 shadow-none";
    buttonLabel = "Not Scheduled";
    buttonIcon = "○";
  } else {
    buttonStyle = "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 shadow-yellow-100";
    buttonLabel = "Mark Complete";
    buttonIcon = "✦";
  }

  const handleEdit = () => {
    setEditingHabit(habit.data);
    setIsOpen(true);
  };

  const handleDelete = async () => {
    await deleteHabitWithUndo(habit.data);
    navigate("/dashboard");
  };

  const handleComplete = async () => {
    await completeHabit({ id });
    await getHabit({ id });
    await getHabitWeeklyLogs({ id });
  };

  return (
    <div className="flex justify-between items-center text-sm">
      <button
        onClick={handleComplete}
        disabled={!habit?.data?.isScheduledToday}
        className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white shadow-around-md hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer ${buttonStyle}`}
      >
        <span>{buttonIcon}</span>
        <span>{buttonLabel}</span>
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
  );
};

export default HabitActions;
