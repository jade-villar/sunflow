import { format, parseISO } from "date-fns";

const HabitDayLog = ({ log }) => {
  const formattedDate = format(parseISO(log.date), "MMM d");

  let dayStyle = "";
  let statusIcon = "";

  if (log.completed) {
    dayStyle = "bg-emerald-100 text-emerald-600 shadow-around-sm shadow-emerald-100";
    statusIcon = "✓";
  } else if (log.isToday && log.isScheduled) {
    dayStyle = "bg-yellow-500 text-white shadow-around-sm shadow-yellow-500/30";
    statusIcon = "?";
  } else if (log.isScheduled) {
    dayStyle = "bg-gray-100 text-gray-400 border border-gray-200";
    statusIcon = "-";
  } else if (log.isToday && !log.isScheduled) {
    dayStyle = "text-yellow-500 border border-yellow-500";
    statusIcon = "∙";
  } else {
    dayStyle = "text-gray-400 border border-gray-200";
    statusIcon = "";
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-[10px] text-gray-400">{log.day}</p>
      <div className={`w-full max-w-13 aspect-square flex items-center justify-center rounded-xl text-sm font-bold hover:scale-105 transition ${dayStyle}`}>
        {statusIcon}
      </div>
      <p className="text-[10px] text-gray-400">{formattedDate}</p>
    </div>
  );
};

export default HabitDayLog;
