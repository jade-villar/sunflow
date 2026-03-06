const prisma = require("../config/db");
const { startOfDay } = require("date-fns");
const calculateDailyStreak = require("../utils/calculateDailyStreak");
const calculateWeeklyStreak = require("../utils/calculateWeeklyStreak");

const completeHabit = async (req, res) => {
  try {
    // Get user from auth middleware
    const userId = req.user.id;

    // Get habit id from params
    const habitId = req.params.id;

    // Get the habit to update
    const habit = await prisma.habit.findUnique({
      where: { id: habitId },
    });

    if (!habit) {
      return res.status(404).json({ error: "Habit not found" });
    }

    // Verify ownership
    if (habit.userId !== userId) {
      return res.status(403).json({ error: "Permission denied" });
    }

    const today = startOfDay(new Date());

    // Check if there is existing log
    const existingLog = await prisma.habitLog.findUnique({
      where: {
        habitId_date: {
          habitId: habitId,
          date: today,
        },
      },
    });

    let log;

    // Create log if there is no existing log
    if (!existingLog) {
      log = await prisma.habitLog.create({
        data: {
          date: today,
          completed: true,
          habitId: habitId,
        },
      });
    }

    // Update log if there is existing log
    if (existingLog) {
      log = await prisma.habitLog.update({
        where: { id: existingLog.id },
        data: {
          completed: !existingLog.completed,
        },
      });
    }

    let newStreak;

    if (habit.frequency === "DAILY") {
      newStreak = await calculateDailyStreak(habitId);
    }

    if (habit.frequency === "WEEKLY") {
      newStreak = await calculateWeeklyStreak(habitId);
    }

    // Update streak
    await prisma.habit.update({
      where: { id: habitId },
      data: {
        streak: newStreak,
        lastCompletedAt: log.completed ? today : null,
      },
    });

    res.status(200).json({
      status: "success",
      data: {
        completed: log.completed,
        streak: newStreak,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getHabitLogs = async (req, res) => {
  try {
    // Get user from auth middleware
    const userId = req.user.id;

    // Get habit id from params
    const habitId = req.params.id;

    // Get habit logs
    const habitLogs = await prisma.habitLog.findMany({
      where: { habitId: habitId },
      orderBy: { date: "desc" },
    });

    if (habitLogs.length === 0) {
      return res.status(200).json({ error: "No logs found" });
    }

    // Verify ownership
    const habit = await prisma.habit.findUnique({
      where: { id: habitId },
    });

    if (!habit || habit.userId !== userId) {
      return res.status(403).json({ error: "Permission denied" });
    }

    res.status(200).json({
      status: "success",
      data: habitLogs.map((log) => ({
        id: log.id,
        date: log.date,
        completed: log.completed,
      })),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { completeHabit, getHabitLogs };
