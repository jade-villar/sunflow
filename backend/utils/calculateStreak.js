const prisma = require("../config/db");
const { startOfDay, subDays, isEqual, format } = require("date-fns");

const calculateStreak = async (habit) => {
  const logs = await prisma.habitLog.findMany({
    where: {
      habitId: habit.id,
      completed: true,
    },
    orderBy: {
      date: "desc",
    },
  });

  const today = startOfDay(new Date());
  const todayKey = format(today, "EEE").toUpperCase();
  
  let streak = 0;
  const scheduledDays = habit.scheduledDays;

  // Check if today was completed
  const todayCompleted = logs.some((log) =>
    isEqual(startOfDay(new Date(log.date)), today),
  );

  // Check if scheduled days include today
  const isScheduledToday = scheduledDays.includes(todayKey);

  // Decide the starting point
  let currentDate = isScheduledToday && !todayCompleted 
    ? subDays(today, 1) 
    : today;

  while (true) {
    const currentDayKey = format(currentDate, "EEE").toUpperCase();

    if (!scheduledDays.includes(currentDayKey)) {
      currentDate = subDays(currentDate, 1);
      continue;
    }

    const hasLog = logs.some((log) =>
      isEqual(startOfDay(new Date(log.date)), currentDate),
    );

    if (hasLog) {
      streak++;
      currentDate = subDays(currentDate, 1);
    } else {
      break;
    }
  }

  return streak;
};

module.exports = calculateStreak;
