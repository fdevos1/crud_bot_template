/*
  Warnings:

  - You are about to drop the column `survey_answer_id` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_survey_answer_id_fkey`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `survey_answer_id`;

-- CreateTable
CREATE TABLE `SurveyVotes` (
    `answer_survey_id` INTEGER NOT NULL,
    `user_id_vote` INTEGER NULL,

    PRIMARY KEY (`answer_survey_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SurveyVotes` ADD CONSTRAINT `SurveyVotes_answer_survey_id_fkey` FOREIGN KEY (`answer_survey_id`) REFERENCES `SurveyAnswers`(`answer_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyVotes` ADD CONSTRAINT `SurveyVotes_user_id_vote_fkey` FOREIGN KEY (`user_id_vote`) REFERENCES `users`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;
