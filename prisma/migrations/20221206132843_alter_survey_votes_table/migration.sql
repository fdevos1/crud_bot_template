-- DropForeignKey
ALTER TABLE `SurveyVotes` DROP FOREIGN KEY `SurveyVotes_user_id_vote_fkey`;

-- AlterTable
ALTER TABLE `SurveyVotes` MODIFY `user_id_vote` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `SurveyVotes` ADD CONSTRAINT `SurveyVotes_user_id_vote_fkey` FOREIGN KEY (`user_id_vote`) REFERENCES `users`(`cellphone`) ON DELETE SET NULL ON UPDATE CASCADE;
