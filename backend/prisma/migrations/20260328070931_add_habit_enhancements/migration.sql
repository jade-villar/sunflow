/*
  Warnings:

  - You are about to drop the column `emoji` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `streak` on the `Habit` table. All the data in the column will be lost.
  - Added the required column `icon` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Day" AS ENUM ('MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN');

-- CreateEnum
CREATE TYPE "Theme" AS ENUM ('LIGHT', 'DARK');

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "emoji",
ADD COLUMN     "icon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Habit" DROP COLUMN "streak",
ADD COLUMN     "currentStreak" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "longestStreak" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "scheduledDays" "Day"[],
ADD COLUMN     "totalCompleted" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "frequency" SET DEFAULT 'DAILY';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "theme" "Theme" NOT NULL DEFAULT 'LIGHT';
