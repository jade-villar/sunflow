-- CreateTable
CREATE TABLE "HabitLog" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "HabitLog_pkey" PRIMARY KEY ("id")
);
