/*
  Warnings:

  - You are about to drop the column `survey_votes` on the `survey` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `survey` DROP COLUMN `survey_votes`,
    ADD COLUMN `survey_send_hour` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `survey_answer_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `SurveyAnswers` (
    `answer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `answer_text` VARCHAR(191) NOT NULL,
    `id_from_survey` INTEGER NULL,

    PRIMARY KEY (`answer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_survey_answer_id_fkey` FOREIGN KEY (`survey_answer_id`) REFERENCES `SurveyAnswers`(`answer_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyAnswers` ADD CONSTRAINT `SurveyAnswers_id_from_survey_fkey` FOREIGN KEY (`id_from_survey`) REFERENCES `survey`(`survey_id`) ON DELETE SET NULL ON UPDATE CASCADE;
