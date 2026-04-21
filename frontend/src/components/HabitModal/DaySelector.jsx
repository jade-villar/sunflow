const DaySelector = ({ days, scheduledDays, toggleDay }) => {
  return (
    <div className="grid grid-cols-7 gap-1.5">
      {days.map((day) => {
        const active = scheduledDays.includes(day);

        return (
          <button
            type="button"
            key={day}
            onClick={() => toggleDay(day)}
            className={`w-full max-w-14 aspect-square text-[10px] font-medium rounded-xl border tracking-wider hover:scale-104 active:scale-96 cursor-pointer transition
              ${
                active
                  ? "bg-yellow-500 text-white shadow-around-sm shadow-yellow-500/30"
                  : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-amber-100 hover:text-yellow-600 hover:border-amber-300"
              }`
            }
          >
            {day}
          </button>
        );
      })}
    </div>
  );
};

export default DaySelector;
