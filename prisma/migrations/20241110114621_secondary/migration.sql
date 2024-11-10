/*
  Warnings:

  - Made the column `byUser` on table `Comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `byUser` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_byUser_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_byUser_fkey`;

-- AlterTable
ALTER TABLE `Comment` MODIFY `byUser` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Product` MODIFY `byUser` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_byUser_fkey` FOREIGN KEY (`byUser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_byUser_fkey` FOREIGN KEY (`byUser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
