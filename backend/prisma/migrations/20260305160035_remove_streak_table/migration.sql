/*
  Warnings:

  - You are about to drop the `Streak` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Streak" DROP CONSTRAINT "Streak_habitId_fkey";

-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "lastCompletedAt" TIMESTAMP(3),
ADD COLUMN     "streak" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "frequency" SET DEFAULT 'DAILY';

-- DropTable
DROP TABLE "Streak";
