import { format, parseISO } from "date-fns";
import { useHabitLog } from "../../context/HabitLogContext";
import HabitDayLog from "./HabitDayLog";
import HabitLogLegends from "./HabitLogLegends";

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

      <HabitLogLegends />
    </section>
  );
};

export default HabitWeeklyLogs;
