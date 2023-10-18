/*
  Warnings:

  - You are about to drop the `Projects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Projects";

-- CreateTable
CREATE TABLE "TrainsSchedules" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "schedules" TEXT NOT NULL,

    CONSTRAINT "TrainsSchedules_pkey" PRIMARY KEY ("id")
);
