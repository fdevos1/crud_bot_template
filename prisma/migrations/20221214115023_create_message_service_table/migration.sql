-- AlterTable
ALTER TABLE `Groups` MODIFY `subject` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `MessageService` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
