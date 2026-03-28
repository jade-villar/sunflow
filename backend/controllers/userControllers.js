const prisma = require("../config/db");

const getCurrentUser = async (req, res) => {
  try {
    // Get user from auth middleware
    const userId = req.user.id;

    // Verify user
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        theme: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

const updateTheme = async (req, res) => {
  try {
    const { theme } = req.body;

    // Get user from auth middleware
    const userId = req.user.id;

    // Verify user
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update theme
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { theme: theme },
      select: {
        id: true,
        name: true,
        email: true,
        theme: true,
      },
    });

    res.status(200).json({
      status: "success",
      data: {
        updatedUser,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getCurrentUser, updateTheme };
