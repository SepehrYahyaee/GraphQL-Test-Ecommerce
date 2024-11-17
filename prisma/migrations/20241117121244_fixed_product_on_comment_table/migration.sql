/*
  Warnings:

  - Made the column `onProduct` on table `Comment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_onProduct_fkey`;

-- AlterTable
ALTER TABLE `Comment` MODIFY `onProduct` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_onProduct_fkey` FOREIGN KEY (`onProduct`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
