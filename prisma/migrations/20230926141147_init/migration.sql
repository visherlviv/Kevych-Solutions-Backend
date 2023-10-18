/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `Entity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Entity_login_key" ON "Entity"("login");
