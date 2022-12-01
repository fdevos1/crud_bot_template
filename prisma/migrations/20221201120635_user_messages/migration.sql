/*
  Warnings:

  - You are about to drop the `messages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `messages` DROP FOREIGN KEY `messages_custom_service_id_fkey`;

-- DropForeignKey
ALTER TABLE `messages` DROP FOREIGN KEY `messages_user_cellphone_fkey`;

-- DropTable
DROP TABLE `messages`;

-- CreateTable
CREATE TABLE `user_messages` (
    `message_id` INTEGER NOT NULL AUTO_INCREMENT,
    `message_text` VARCHAR(191) NOT NULL,
    `message_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_cellphone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`message_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_messages` ADD CONSTRAINT `user_messages_user_cellphone_fkey` FOREIGN KEY (`user_cellphone`) REFERENCES `users`(`cellphone`) ON DELETE RESTRICT ON UPDATE CASCADE;
