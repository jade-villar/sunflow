const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const main = async () => {
  console.log("Seeding categories...")

  await prisma.category.createMany({
    data: [
      { name: "Health", emoji: "🥗" },
      { name: "Mindfulness", emoji: "🧘" },
      { name: "Productivity", emoji: "⏰" },
      { name: "Learning", emoji: "📚" },
      { name: "Home & Household", emoji: "🏡" },
      { name: "Social", emoji: "🤝" },
      { name: "Finances", emoji: "💵" },
      { name: "Spirituality", emoji: "🙏" },
    ]
  })

  console.log("Finished seeding categories")
}

main()
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
