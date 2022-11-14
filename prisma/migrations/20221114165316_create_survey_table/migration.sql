-- AlterTable
ALTER TABLE `users` ADD COLUMN `on_attendance` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `survey` (
    `survey_id` INTEGER NOT NULL AUTO_INCREMENT,
    `survey_text` VARCHAR(191) NOT NULL,
    `survey_subject` VARCHAR(191) NOT NULL,
    `survey_votes` INTEGER NOT NULL DEFAULT 0,
    `survey_sended` BOOLEAN NOT NULL DEFAULT false,
    `survey_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`survey_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
