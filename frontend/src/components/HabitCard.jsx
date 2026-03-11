import { Link } from "react-router-dom";

const HabitCard = ({ habit }) => {
  return (
    <div className="cursor-pointer hover:drop-shadow-sm active:drop-shadow-sm">
      <Link
        to={`/habit/${habit.id}`}
        className="bg-gray-100 px-4 py-6 md:px-6 md:py-6 rounded-md flex justify-between items-center gap-4"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-2xl">{habit?.category?.emoji}</span>

          <div className="flex flex-col gap-2">
            <h3 className="text-gray-800 font-semibold">{habit?.title}</h3>
            <p className="text-xs text-gray-500">
              {habit?.category?.name} &nbsp;&bull; 🔥 {habit?.streak} streak
            </p>
          </div>
        </div>

        <button
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
          }}
          className={`px-4 py-2 rounded-sm text-xs cursor-pointer ${
            habit?.completedToday
              ? "bg-green-100 text-green-700 hover:bg-green-500 hover:text-green-100 active:bg-green-500 active:text-green-100 transition"
              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-500 hover:text-yellow-100 active:bg-yellow-500 active:text-yellow-100 transition"
          }`}
        >
          {habit?.completedToday ? "Completed" : "Complete"}
        </button>
      </Link>
    </div>
  );
};

export default HabitCard;
