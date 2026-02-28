const completeHabit = async (req, res) => {
  res.json({ message: "Complete habit" })
}

const getHabitLogs = async (req, res) => {
  res.json({ message: "Get habit logs" })
}

const getHabitStreak = async (req, res) => {
  res.json({ message: "Get habit streak" })
}

module.exports = { completeHabit, getHabitLogs, getHabitStreak }