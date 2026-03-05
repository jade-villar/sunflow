const prisma = require("../config/db");

const getAllHabits = async (req, res) => {
  try {
    // Get user from auth middleware
    const userId = req.user.id;

    // Get all habits
    const habits = await prisma.habit.findMany({
      where: { userId: userId },
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });

    if (habits.length === 0) {
      return res.status(200).json({ error: "No habits found" });
    }

    res.status(200).json({
      status: "success",
      data: habits.map((habit) => ({
        id: habit.id,
        title: habit.title,
        description: habit.description,
        frequency: habit.frequency,
        category: {
          id: habit.category.id,
          name: habit.category.name,
          emoji: habit.category.emoji,
        },
        streak: habit.streak,
        lastCompletedAt: habit.lastCompletedAt,
        createdAt: habit.createdAt,
        updatedAt: habit.updatedAt,
      })),
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

    // Get specific habit
    const habit = await prisma.habit.findUnique({
      where: { id: req.params.id },
      include: { category: true },
    });

    if (!habit) {
      return res.status(404).json({ error: "Habit not found" });
    }

    // Verify ownership
    if (habit.userId !== userId) {
      return res.status(403).json({ error: "Permission denied" });
    }

    res.status(200).json({
      status: "success",
      data: {
        id: habit.id,
        title: habit.title,
        description: habit.description,
        frequency: habit.frequency,
        category: {
          id: habit.category.id,
          name: habit.category.name,
          emoji: habit.category.emoji,
        },
        streak: habit.streak,
        lastCompletedAt: habit.lastCompletedAt,
        createdAt: habit.createdAt,
        updatedAt: habit.updatedAt,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

const addHabit = async (req, res) => {
  try {
    const { title, description, frequency, categoryId } = req.body;

    if (!title || !frequency || !categoryId) {
      return res
        .status(400)
        .json({ error: "Title, frequency and category are required" });
    }

    // Get user from auth middleware
    const userId = req.user.id;

    // Add habit
    const habit = await prisma.habit.create({
      data: {
        title: title,
        description: description,
        frequency: frequency,
        categoryId: categoryId,
        userId: userId,
      },
      include: { category: true },
    });

    res.status(201).json({
      status: "success",
      data: {
        id: habit.id,
        title: habit.title,
        description: habit.description,
        frequency: habit.frequency,
        category: {
          id: habit.category.id,
          name: habit.category.name,
          emoji: habit.category.emoji,
        },
        streak: habit.streak,
        lastCompletedAt: habit.lastCompletedAt,
        createdAt: habit.createdAt,
        updatedAt: habit.updatedAt,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

const updateHabit = async (req, res) => {
  try {
    const { title, description, frequency, categoryId } = req.body;

    if (!title || !frequency || !categoryId) {
      return res
        .status(400)
        .json({ error: "Title, frequency and category are required" });
    }

    // Get user from auth middleware
    const userId = req.user.id;

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

    // Update habit
    const habit = await prisma.habit.update({
      where: { id: habitItem.id },
      data: {
        title: title,
        description: description,
        frequency: frequency,
        categoryId: categoryId,
      },
      include: { category: true },
    });

    res.status(200).json({
      status: "success",
      data: {
        id: habit.id,
        title: habit.title,
        description: habit.description,
        frequency: habit.frequency,
        category: {
          id: habit.category.id,
          name: habit.category.name,
          emoji: habit.category.emoji,
        },
        streak: habit.streak,
        lastCompletedAt: habit.lastCompletedAt,
        createdAt: habit.createdAt,
        updatedAt: habit.updatedAt,
      },
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
