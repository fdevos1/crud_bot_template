/*
  Warnings:

  - You are about to drop the column `u_id` on the `messages` table. All the data in the column will be lost.
  - Added the required column `user_cellphone` to the `messages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `messages` DROP FOREIGN KEY `messages_u_id_fkey`;

-- AlterTable
ALTER TABLE `messages` DROP COLUMN `u_id`,
    ADD COLUMN `user_cellphone` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_user_cellphone_fkey` FOREIGN KEY (`user_cellphone`) REFERENCES `users`(`cellphone`) ON DELETE RESTRICT ON UPDATE CASCADE;
