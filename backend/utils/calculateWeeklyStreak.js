const prisma = require("../config/db");
const { startOfWeek, endOfWeek, subWeeks, isWithinInterval } = require("date-fns");

const calculateWeeklyStreak = async (habitId) => {
  const logs = await prisma.habitLog.findMany({
    where: {
      habitId: habitId,
      completed: true,
    },
    orderBy: {
      date: "desc",
    },
  });

  let streak = 0;
  let currentWeekStart = startOfWeek(new Date(), { weekStartsOn: 1 });

  while (true) {
    const interval = {
      start: currentWeekStart,
      end: endOfWeek(currentWeekStart, { weekStartsOn: 1 }),
    };

    const hasLogThisWeek = logs.some((log) =>
      isWithinInterval(new Date(log.date), interval),
    );

    if (hasLogThisWeek) {
      streak++;
      currentWeekStart = subWeeks(currentWeekStart, 1);
    } else {
      break;
    }
  }

  return streak;
};

module.exports = calculateWeeklyStreak;
