const prisma = require("../config/db");
const { startOfDay, format, startOfWeek, endOfWeek, eachDayOfInterval } = require("date-fns");
const { getLocalToday, getLocalTodayKey } = require("../utils/dateUtils");
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

    const today = getLocalToday(req.user.timezone);
    const todayKey = getLocalTodayKey(req.user.timezone);

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
    const newStreak = await calculateStreak(habit, req.user.timezone);

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

const getWeeklyHabitLogs = async (req, res) => {
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

    const today = getLocalToday(req.user.timezone);
    const todayString = format(today, "yyyy-MM-dd");
    const weekStart = startOfWeek(today, { weekStartsOn: 1 });
    const weekEnd = endOfWeek(today, { weekStartsOn: 1 });

    // Fetch all logs for the current week
    const logs = await prisma.habitLog.findMany({
      where: {
        habitId,
        date: {
          gte: weekStart,
          lte: weekEnd,
        },
      },
    });

    const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

    // Build response for each day of the week
    const weeklyLogs = weekDays.map((day) => {
      const dayKey = format(day, "EEE").toUpperCase();
      const dayString = format(day, "yyyy-MM-dd");
      const isScheduled = habit.scheduledDays.includes(dayKey);

      const log = logs.find(
        (log) =>
          format(startOfDay(new Date(log.date)), "yyyy-MM-dd") === dayString,
      );

      return {
        date: format(day, "yyyy-MM-dd"),
        day: dayKey,
        isScheduled: isScheduled,
        completed: log ? log.completed : false,
        isToday: dayString === todayString,
      };
    });

    res.status(200).json({
      status: "success",
      data: {
        weekStart: format(weekStart, "yyyy-MM-dd"),
        weekEnd: format(weekEnd, "yyyy-MM-dd"),
        logs: weeklyLogs,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { completeHabit, getWeeklyHabitLogs };
