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
            className={`w-full max-w-14 aspect-square text-[10px] font-medium rounded-xl border tracking-wider cursor-pointer transition
              ${
                active
                  ? "bg-yellow-500 text-white shadow-around-sm shadow-yellow-100"
                  : "bg-stone-100 text-slate-800 border-stone-200 hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-600/40"
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
