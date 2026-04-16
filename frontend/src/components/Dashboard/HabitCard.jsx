import { useState } from "react";
import { Link } from "react-router-dom";
import { useHabit } from "../../context/HabitContext";
import { useHabitLog } from "../../context/HabitLogContext";
import ActionLoading from "../Loading/ActionLoading";

const HabitCard = ({ habit }) => {
  const { getAllHabits } = useHabit();
  const { completeHabit } = useHabitLog();

  const [habitLoadingId, setHabitLoadingId] = useState(null);

  const isLoading = habitLoadingId === habit.id;

  let buttonStyle = "";
  let buttonLabel = "";
  let loadingLabel = "";

  if (habit.isCompletedToday) {
    buttonStyle = "hover:shadow-around-md hover:shadow-emerald-200 border border-emerald-300 bg-emerald-100 text-emerald-600 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white active:border-emerald-500 active:bg-emerald-500 active:text-white transition";
    buttonLabel = "Completed";
    loadingLabel = "Saving";
  } else if (!habit.isScheduledToday) {
    buttonStyle = "border border-stone-300 bg-stone-100 text-stone-600";
    buttonLabel = "Unscheduled";
  } else {
    buttonStyle = "hover:shadow-around-md hover:shadow-yellow-200 border border-yellow-300 bg-amber-100 text-yellow-600 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white active:border-yellow-500 active:bg-yellow-500 active:text-white transition";
    buttonLabel = "Mark Done";
    loadingLabel = "Marking";
  }

  const handleComplete = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    setHabitLoadingId(habit.id);
    await completeHabit({ id: habit.id });
    await getAllHabits();
    setHabitLoadingId(null);
  };

  return (
    <div className="group border-b border-slate-200 last:border-none pt-4 pb-4 first:pt-1 last:pb-1 cursor-pointer">
      <Link
        to={`/habit/${habit.id}`}
        className="grid grid-cols-[1fr_100px] items-center gap-4"
      >
        <div className="flex flex-col gap-2 min-w-0">
          <h3 className="whitespace-nowrap overflow-hidden text-ellipsis text-slate-800 font-bold leading-4.5 group-hover:text-yellow-500 group-active:text-yellow-600 transition">
            {habit?.title}
          </h3>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>{habit?.frequency} &nbsp;&bull;</span>
            <img
              src="/icons/flame.svg"
              className={`w-3 aspect-square mb-px ${!habit.isScheduledToday && "grayscale"}`}
            />
            <span>{habit?.currentStreak} streak</span>
          </div>
        </div>

        <button
          onClick={handleComplete}
          disabled={!habit.isScheduledToday || isLoading}
          className={`py-2 flex justify-center rounded-full text-[10px] md:text-[11px] font-semibold cursor-pointer text-nowrap ${buttonStyle}`}
        >
          {isLoading ? (
            <ActionLoading text={loadingLabel} />
          ) : (
            <span>{buttonLabel}</span>
          )}
        </button>
      </Link>
    </div>
  );
};

export default HabitCard;
