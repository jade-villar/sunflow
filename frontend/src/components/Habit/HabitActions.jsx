import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHabit } from "../../context/HabitContext";
import { useHabitLog } from "../../context/HabitLogContext";
import ActionLoading from "../Loading/ActionLoading";

const HabitActions = ({ id, setEditingHabit, setIsOpen }) => {
  const { habit, getHabit, getAllHabits, deleteHabitWithUndo, actionLoading } = useHabit();
  const { completeHabit, getHabitWeeklyLogs } = useHabitLog();

  const [isCompleting, setIsCompleting] = useState(false);

  const navigate = useNavigate();

  let buttonStyle = "";
  let buttonLabel = "";
  let buttonIcon = "";
  let loadingLabel = "";

  if (habit?.data?.isCompletedToday) {
    buttonStyle = "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-600 shadow-emerald-100";
    buttonLabel = "Completed!";
    buttonIcon = "✓";
    loadingLabel = "Saving";
  } else {
    buttonStyle = "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 shadow-yellow-100";
    buttonLabel = "Mark Complete";
    buttonIcon = "✦";
    loadingLabel = "Marking";
  }

  const handleComplete = async () => {
    setIsCompleting(true);
    await completeHabit({ id });
    await getAllHabits();
    await getHabitWeeklyLogs({ id });
    await getHabit({ id });
    setIsCompleting(false);
  };

  const handleEdit = () => {
    setEditingHabit(habit.data);
    setIsOpen(true);
  };

  const handleDelete = async () => {
    await deleteHabitWithUndo(habit.data);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-between items-center gap-4 flex-wrap text-sm">
      <button
        onClick={handleComplete}
        disabled={isCompleting}
        className={`w-full sm:w-fit sm:min-w-40 flex justify-center items-center px-8 py-4 rounded-full font-semibold text-white shadow-around-md hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer ${buttonStyle}`}
      >
        {isCompleting ? (
          <ActionLoading text={loadingLabel} />
        ) : (
          <span className="flex items-center gap-2">
            <span>{buttonIcon}</span>
            <span className="text-nowrap">{buttonLabel}</span>
          </span>
        )}
      </button>

      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          disabled={actionLoading}
          className="px-6 py-3 bg-white border border-slate-200 rounded-full hover:bg-slate-900 hover:border-slate-900 hover:text-white active:bg-slate-900 active:border-slate-900 active:text-white transition cursor-pointer"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          disabled={actionLoading}
          className="px-6 py-3 rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white transition cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default HabitActions;
