/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Float`.

*/
-- AlterTable
ALTER TABLE `Product` MODIFY `price` FLOAT NOT NULL;
