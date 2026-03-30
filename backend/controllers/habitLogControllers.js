const prisma = require("../config/db");
const { startOfDay, format } = require("date-fns");
const calculateStreak = require("../utils/calculateStreak");

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
    const todayKey = format(new Date(), "EEE").toUpperCase();

    // Check if scheduled today
    const isScheduledToday = habit.scheduledDays.includes(todayKey);

    if (!isScheduledToday) {
      return res
        .status(400)
        .json({ error: "Habit is not scheduled for today" });
    }

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

    // Mark habit as completed
    if (!existingLog) {
      log = await prisma.habitLog.create({
        data: {
          date: today,
          completed: true,
          habitId: habitId,
        },
      });
    } else {
      log = await prisma.habitLog.update({
        where: { id: existingLog.id },
        data: {
          completed: !existingLog.completed,
        },
      });
    }

    // Calculate streak
    const newStreak = await calculateStreak(habit);

    // Calculate total completed
    let totalCompleted = habit.totalCompleted;

    if (!existingLog) {
      totalCompleted += 1;
    } else {
      totalCompleted = log.completed ? totalCompleted + 1 : totalCompleted - 1;
    }

    // Calculate longest streak
    const longestStreak = Math.max(habit.longestStreak, newStreak);

    // Update the habit
    await prisma.habit.update({
      where: { id: habitId },
      data: {
        currentStreak: newStreak,
        longestStreak: longestStreak,
        totalCompleted: totalCompleted,
        lastCompletedAt: log.completed ? today : null,
      },
    });

    res.status(200).json({
      status: "success",
      data: {
        completed: log.completed,
        currentStreak: newStreak,
        longestStreak: longestStreak,
        totalCompleted: totalCompleted,
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
      return res.status(200).json({ message: "No logs found" });
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
