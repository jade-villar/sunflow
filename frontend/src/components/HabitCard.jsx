import { Link } from "react-router-dom";

const HabitCard = ({ habit }) => {
  return (
    <div className="group border-b border-slate-200 last:border-none cursor-pointer">
      <Link
        to={`/habit/${habit.id}`}
        className="py-4 flex justify-between items-center gap-4"
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-slate-800 font-bold leading-4.5 group-hover:underline group-active:underline">
            {habit?.title}
          </h3>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>{habit?.frequency} &nbsp;&bull;</span>
            <img src="/flame.svg" className="w-3 h-3 mb-px" />
            <span>{habit?.streak} streak</span>
          </div>
        </div>

        <button
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
          }}
          title={habit?.completedToday ? "" : "Mark Complete"}
          className={`px-4 py-2 rounded-full text-[11px] font-semibold hover:shadow-around-md cursor-pointer text-nowrap ${
            habit?.completedToday
              ? "hover:shadow-emerald-200 border border-emerald-300 bg-emerald-100 text-emerald-600 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white active:border-emerald-500 active:bg-emerald-500 active:text-white transition"
              : "hover:shadow-yellow-200 border border-yellow-300 bg-amber-100 text-yellow-600 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white active:border-yellow-500 active:bg-yellow-500 active:text-white transition"
          }`}
        >
          {habit?.completedToday ? "✓ Completed" : "Mark Done"}
        </button>
      </Link>
    </div>
  );
};

export default HabitCard;
