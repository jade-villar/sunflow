import { format, parseISO } from "date-fns";
import { useHabitLog } from "../../context/HabitLogContext";
import HabitDayLog from "./HabitDayLog";

const HabitWeeklyLogs = () => {
  const { weeklyLogs } = useHabitLog();

  const formattedWeekStart = weeklyLogs
    ? format(parseISO(weeklyLogs?.data?.weekStart), "MMM d")
    : "";

  const formattedWeekEnd = weeklyLogs
    ? format(parseISO(weeklyLogs?.data?.weekEnd), "MMM d")
    : "";

  return (
    <section className="flex flex-col gap-6 bg-white border border-slate-200 rounded-3xl px-6 py-7 md:px-7 md:py-8 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition">
      <div className="text-xs text-slate-400 font-bold tracking-wider flex justify-between items-center gap-4 mb-4">
        <p>WEEKLY HISTORY</p>
        <p>{formattedWeekStart} – {formattedWeekEnd}</p>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {weeklyLogs?.data?.logs?.map((log) => (
          <HabitDayLog key={log.date} log={log} />
        ))}
      </div>

      <hr className="border-slate-200" />

      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-1.5">
          <div className="w-2 aspect-square rounded-full bg-yellow-500"></div>
          <p className="text-[11px] text-slate-400">Today</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 aspect-square rounded-full bg-white border border-slate-300"></div>
          <p className="text-[11px] text-slate-400">Not scheduled</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 aspect-square rounded-full bg-emerald-500"></div>
          <p className="text-[11px] text-slate-400">Completed</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 aspect-square rounded-full bg-slate-300"></div>
          <p className="text-[11px] text-slate-400">Not completed</p>
        </div>
      </div>
    </section>
  );
};

export default HabitWeeklyLogs;
