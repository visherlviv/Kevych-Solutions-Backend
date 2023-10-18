/*
  Warnings:

  - You are about to drop the column `country_of_birth` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `date_of_birth` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Users` table. All the data in the column will be lost.
  - Added the required column `phone_description` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_discount` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_model` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_photo` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_price` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "country_of_birth",
DROP COLUMN "date_of_birth",
DROP COLUMN "email",
DROP COLUMN "first_name",
DROP COLUMN "gender",
DROP COLUMN "last_name",
ADD COLUMN     "phone_description" TEXT NOT NULL,
ADD COLUMN     "phone_discount" TEXT NOT NULL,
ADD COLUMN     "phone_model" TEXT NOT NULL,
ADD COLUMN     "phone_photo" TEXT NOT NULL,
ADD COLUMN     "phone_price" TEXT NOT NULL;
