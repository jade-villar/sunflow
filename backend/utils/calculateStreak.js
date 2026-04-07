const prisma = require("../config/db");
const { subDays, format } = require("date-fns");
const { getLocalToday, getLocalTodayKey } = require("./dateUtils");

const calculateStreak = async (habit, timezone = "UTC") => {
  const logs = await prisma.habitLog.findMany({
    where: {
      habitId: habit.id,
      completed: true,
    },
    orderBy: {
      date: "desc",
    },
  });

  const today = getLocalToday(timezone);
  const todayKey = getLocalTodayKey(timezone);

  const completedDates = logs.map((log) =>
    format(new Date(log.date), "yyyy-MM-dd"),
  );

  let streak = 0;
  const scheduledDays = habit.scheduledDays;

  const todayString = format(today, "yyyy-MM-dd");
  const todayCompleted = completedDates.includes(todayString);
  const isScheduledToday = scheduledDays.includes(todayKey);

  let currentDate =
    isScheduledToday && !todayCompleted ? subDays(today, 1) : today;

  while (true) {
    const currentDayKey = format(currentDate, "EEE").toUpperCase();
    const currentDateString = format(currentDate, "yyyy-MM-dd");

    if (!scheduledDays.includes(currentDayKey)) {
      currentDate = subDays(currentDate, 1);
      continue;
    }

    if (completedDates.includes(currentDateString)) {
      streak++;
      currentDate = subDays(currentDate, 1);
    } else {
      break;
    }
  }

  return streak;
};

module.exports = calculateStreak;
