const prisma = require("../config/db");
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

  const completedDates = logs.map((log) => log.date);

  const todayCompleted = completedDates.includes(today);
  const isScheduledToday = habit.scheduledDays.includes(todayKey);

  // Build date strings going backwards
  const getPrevDate = (dateString, days = 1) => {
    const d = new Date(dateString + "T00:00:00Z");
    d.setUTCDate(d.getUTCDate() - days);
    return d.toISOString().slice(0, 10);
  };

  const getDayKey = (dateString) => {
    return new Date(dateString + "T00:00:00Z")
      .toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" })
      .toUpperCase();
  };

  let streak = 0;

  let currentDate =
    isScheduledToday && !todayCompleted ? getPrevDate(today) : today;

  while (true) {
    const currentDayKey = getDayKey(currentDate);

    if (!habit.scheduledDays.includes(currentDayKey)) {
      currentDate = getPrevDate(currentDate);
      continue;
    }

    if (completedDates.includes(currentDate)) {
      streak++;
      currentDate = getPrevDate(currentDate);
    } else {
      break;
    }
  }

  return streak;
};

module.exports = calculateStreak;
