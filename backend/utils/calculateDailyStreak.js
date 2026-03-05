const prisma = require("../config/db")
const { startOfDay, subDays, isEqual } = require("date-fns")

const calculateDailyStreak = async (habitId) => {
  const logs = await prisma.habitLog.findMany({
    where: {
      habitId: habitId,
      completed: true
    },
    orderBy: {
      date: "desc"
    }
  })

  let streak = 0
  let currentDate = startOfDay(new Date())

  for (const log of logs) {
    const logDate = startOfDay(new Date(log.date))

    if (isEqual(logDate, currentDate)) {
      streak++
      currentDate = subDays(currentDate, 1)
    } else {
      break
    }
  }

  return streak
}

module.exports = calculateDailyStreak
