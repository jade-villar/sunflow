const StreakCard = ({ streakHabits }) => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6">
      <p className="text-gray-800 font-bold mb-8">Streaks</p>
      <div className="bg-gray-100 rounded-md p-6 flex flex-col gap-4 hover:drop-shadow-sm active:drop-shadow-sm">
        <div className="flex justify-center items-center gap-2 flex-nowrap">
          <img src="/flame.svg" className="w-12 h-12" />
          <h2 className="text-gray-800 text-5xl font-bold leading-none">
            {streakHabits}&nbsp;
          </h2>
        </div>

        <p className="text-sm text-gray-500 text-center">
          {streakHabits === 1 ? "habit on a streak" : "habits on a streak"}
        </p>
      </div>
    </div>
  );
};

export default StreakCard;
