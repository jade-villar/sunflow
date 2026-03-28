const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const main = async () => {
  console.log("Seeding categories...");

  await prisma.category.createMany({
    data: [
      { name: "Health", icon: "health-icon" },
      { name: "Mindfulness", icon: "mindfulness-icon" },
      { name: "Productivity", icon: "productivity-icon" },
      { name: "Learning", icon: "learning-icon" },
      { name: "Home & Household", icon: "home-&-household-icon" },
      { name: "Social", icon: "social-icon" },
      { name: "Finances", icon: "finances-icon" },
      { name: "Spirituality", icon: "spirituality-icon" },
    ],
  });

  console.log("Finished seeding categories");
};

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
