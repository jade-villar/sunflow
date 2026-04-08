const prisma = require("../config/db");
const { getLocalToday, getLocalTodayKey } = require("../utils/dateUtils");
const calculateStreak = require("../utils/calculateStreak");

const getAllHabits = async (req, res) => {
  try {
    // Get user from auth middleware
    const userId = req.user.id;

    // Get timezone
    const timezone = req.user.timezone;

    const todayString = getLocalToday(timezone);
    const todayKey = getLocalTodayKey(timezone);

    // Get all habits
    const habits = await prisma.habit.findMany({
      where: { userId: userId },
      select: {
        id: true,
        title: true,
        description: true,
        frequency: true,
        scheduledDays: true,
        currentStreak: true,
        longestStreak: true,
        totalCompleted: true,
        lastCompletedAt: true,
        createdAt: true,
        updatedAt: true,

        category: {
          select: {
            id: true,
            name: true,
            icon: true,
          },
        },

        logs: {
          where: {
            date: todayString,
          },
          select: {
            completed: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    if (habits.length === 0) {
      return res.status(200).json({ message: "No habits found" });
    }

    res.status(200).json({
      status: "success",
      data: habits.map((habit) => {
        const isScheduledToday = habit.scheduledDays.includes(todayKey);
        const isCompletedToday = habit.logs.some((log) => log.completed);

        return {
          ...habit,
          isScheduledToday,
          isCompletedToday,
        };
      }),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getHabit = async (req, res) => {
  try {
    // Get user from auth middleware
    const userId = req.user.id;

    // Get timezone
    const timezone = req.user.timezone;

    const todayString = getLocalToday(timezone);
    const todayKey = getLocalTodayKey(timezone);

    // Get specific habit
    const habit = await prisma.habit.findUnique({
      where: { id: req.params.id },
      select: {
        id: true,
        title: true,
        description: true,
        frequency: true,
        scheduledDays: true,
        currentStreak: true,
        longestStreak: true,
        totalCompleted: true,
        lastCompletedAt: true,
        createdAt: true,
        updatedAt: true,

        category: {
          select: {
            id: true,
            name: true,
            icon: true,
          },
        },

        logs: {
          where: {
            date: todayString,
          },
          select: {
            completed: true,
          },
        },

        userId: true,
      },
    });

    if (!habit) {
      return res.status(404).json({ error: "Habit not found" });
    }

    // Verify ownership
    if (habit.userId !== userId) {
      return res.status(403).json({ error: "Permission denied" });
    }

    // Check completion status
    const isScheduledToday = habit.scheduledDays.includes(todayKey);
    const isCompletedToday = habit.logs.some((log) => log.completed);

    res.status(200).json({
      status: "success",
      data: {
        ...habit,
        isScheduledToday,
        isCompletedToday,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

const addHabit = async (req, res) => {
  try {
    const { title, description, categoryId, frequency, scheduledDays } =
      req.body;

    // Get user from auth middleware
    const userId = req.user.id;

    // Normalize scheduled days
    const ALL_DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    let finalScheduledDays = scheduledDays;

    if (frequency === "DAILY") {
      finalScheduledDays = ALL_DAYS;
    }

    if (frequency === "WEEKLY") {
      finalScheduledDays = scheduledDays;
    }

    // Add habit
    const habit = await prisma.habit.create({
      data: {
        title: title,
        description: description,
        categoryId: categoryId,
        frequency: frequency,
        scheduledDays: finalScheduledDays,
        userId: userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        category: {
          select: {
            id: true,
            name: true,
            icon: true,
          },
        },
        frequency: true,
        scheduledDays: true,
        currentStreak: true,
        longestStreak: true,
        totalCompleted: true,
        lastCompletedAt: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(201).json({
      status: "success",
      data: habit,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

const updateHabit = async (req, res) => {
  try {
    const { title, description, categoryId, frequency, scheduledDays } =
      req.body;

    // Get user from auth middleware
    const userId = req.user.id;

    // Get timezone
    const timezone = req.user.timezone;

    // Normalize scheduled days
    const ALL_DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    let finalScheduledDays = scheduledDays;

    if (frequency === "DAILY") {
      finalScheduledDays = ALL_DAYS;
    }

    if (frequency === "WEEKLY") {
      finalScheduledDays = scheduledDays;
    }

    // Get the habit to update
    const habitItem = await prisma.habit.findUnique({
      where: { id: req.params.id },
    });

    if (!habitItem) {
      return res.status(404).json({ error: "Habit not found" });
    }

    // Verify ownership
    if (habitItem.userId !== userId) {
      return res.status(403).json({ error: "Permission denied" });
    }

    const today = getLocalToday(timezone);
    const todayKey = getLocalTodayKey(timezone);

    const todayWasScheduled = habitItem.scheduledDays.includes(todayKey);
    const todayIsStillScheduled = finalScheduledDays.includes(todayKey);

    // Mark today's log as uncompleted if today is being unscheduled
    if (todayWasScheduled && !todayIsStillScheduled) {
      const todayLog = await prisma.habitLog.findUnique({
        where: {
          habitId_date: {
            habitId: habitItem.id,
            date: today,
          },
        },
      });

      if (todayLog?.completed) {
        await prisma.habitLog.update({
          where: {
            id: todayLog.id,
          },
          data: {
            completed: false,
          },
        });
      }
    }

    // Update habit
    const habit = await prisma.habit.update({
      where: { id: habitItem.id },
      data: {
        title: title,
        description: description,
        categoryId: categoryId,
        frequency: frequency,
        scheduledDays: finalScheduledDays,
      },
      select: {
        id: true,
        title: true,
        description: true,
        category: {
          select: {
            id: true,
            name: true,
            icon: true,
          },
        },
        frequency: true,
        scheduledDays: true,
        currentStreak: true,
        longestStreak: true,
        totalCompleted: true,
        lastCompletedAt: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Sync stats after the schedule change
    if (todayWasScheduled && !todayIsStillScheduled) {
      const newStreak = await calculateStreak(habit, timezone);

      const totalCompleted = await prisma.habitLog.count({
        where: {
          habitId: habit.id,
          completed: true,
        },
      });

      const lastLog = await prisma.habitLog.findFirst({
        where: {
          habitId: habit.id,
          completed: true,
        },
        orderBy: { date: "desc" },
      });

      await prisma.habit.update({
        where: { id: habit.id },
        data: {
          currentStreak: newStreak,
          longestStreak: Math.max(habit.longestStreak, newStreak),
          totalCompleted: totalCompleted,
          lastCompletedAt: lastLog?.date ?? null,
        },
      });
    }

    res.status(200).json({
      status: "success",
      data: habit,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

const deleteHabit = async (req, res) => {
  try {
    // Get user from auth middleware
    const userId = req.user.id;

    // Get the habit to delete
    const habitItem = await prisma.habit.findUnique({
      where: { id: req.params.id },
    });

    if (!habitItem) {
      return res.status(404).json({ error: "Habit not found" });
    }

    // Verify ownership
    if (habitItem.userId !== userId) {
      return res.status(403).json({ error: "Permission denied" });
    }

    // Delete habit
    await prisma.habit.delete({
      where: { id: habitItem.id },
    });

    res.status(200).json({
      status: "success",
      message: "Habit deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getAllHabits, getHabit, addHabit, updateHabit, deleteHabit };
