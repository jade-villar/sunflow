/*
  Warnings:

  - A unique constraint covering the columns `[habitId,date]` on the table `HabitLog` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[habitId]` on the table `Streak` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `Habit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Habit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `habitId` to the `HabitLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `habitId` to the `Streak` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "HabitLog" ADD COLUMN     "habitId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Streak" ADD COLUMN     "habitId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "HabitLog_habitId_date_key" ON "HabitLog"("habitId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "Streak_habitId_key" ON "Streak"("habitId");

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HabitLog" ADD CONSTRAINT "HabitLog_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Streak" ADD CONSTRAINT "Streak_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
