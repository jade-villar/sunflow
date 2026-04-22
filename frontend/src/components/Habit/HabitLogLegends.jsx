const HabitLogLegends = () => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <div className="flex items-center gap-1.5">
        <div className="w-2 aspect-square rounded-full bg-yellow-500"></div>
        <p className="text-[11px] text-gray-400">Today</p>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-2 aspect-square rounded-full bg-white border border-gray-300"></div>
        <p className="text-[11px] text-gray-400">Unscheduled</p>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-2 aspect-square rounded-full bg-emerald-500"></div>
        <p className="text-[11px] text-gray-400">Completed</p>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-2 aspect-square rounded-full bg-gray-300"></div>
        <p className="text-[11px] text-gray-400">Uncompleted</p>
      </div>
    </div>
  );
};

export default HabitLogLegends;
