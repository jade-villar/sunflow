const prisma = require("../config/db");

const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { id: "asc" },
      select: {
        id: true,
        name: true,
        icon: true,
      },
    });

    res.status(200).json({
      status: "success",
      data: categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = getCategories;
