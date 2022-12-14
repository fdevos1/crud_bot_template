-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `user_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `cellphone` VARCHAR(191) NOT NULL,
    `wa_id` VARCHAR(191) NOT NULL,
    `groups_id` INTEGER NULL,
    `on_attendance` BOOLEAN NOT NULL DEFAULT false,
    `on_transmission_list` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `users_cellphone_key`(`cellphone`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_messages` (
    `message_id` INTEGER NOT NULL AUTO_INCREMENT,
    `message_text` VARCHAR(191) NOT NULL,
    `message_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_cellphone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`message_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attendants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `cellphone` VARCHAR(191) NOT NULL,
    `wa_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `role_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `finished_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_cellphone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `role_name` VARCHAR(191) NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MessageService` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `sended` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `refreshToken` (
    `id` VARCHAR(191) NOT NULL,
    `expiresIn` INTEGER NOT NULL,
    `u_id` INTEGER NOT NULL,

    UNIQUE INDEX `refreshToken_u_id_key`(`u_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Groups` (
    `group_id` INTEGER NOT NULL AUTO_INCREMENT,
    `subject` VARCHAR(191) NULL,
    `group_name` VARCHAR(191) NOT NULL,
    `type` INTEGER NOT NULL,
    `created_on_wa` BOOLEAN NOT NULL DEFAULT false,
    `wa_group_id` VARCHAR(191) NULL,

    PRIMARY KEY (`group_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey` (
    `survey_id` INTEGER NOT NULL AUTO_INCREMENT,
    `survey_text` VARCHAR(191) NOT NULL,
    `survey_subject` VARCHAR(191) NOT NULL,
    `survey_sended` BOOLEAN NOT NULL DEFAULT false,
    `survey_send_hour` DATETIME(3) NULL,
    `survey_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`survey_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurveyVotes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id_vote` VARCHAR(191) NOT NULL,
    `answer_text` VARCHAR(191) NOT NULL,
    `survey_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_groups_id_fkey` FOREIGN KEY (`groups_id`) REFERENCES `Groups`(`group_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_messages` ADD CONSTRAINT `user_messages_user_cellphone_fkey` FOREIGN KEY (`user_cellphone`) REFERENCES `users`(`cellphone`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attendants` ADD CONSTRAINT `attendants_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `services` ADD CONSTRAINT `services_user_cellphone_fkey` FOREIGN KEY (`user_cellphone`) REFERENCES `users`(`cellphone`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `refreshToken` ADD CONSTRAINT `refreshToken_u_id_fkey` FOREIGN KEY (`u_id`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyVotes` ADD CONSTRAINT `SurveyVotes_user_id_vote_fkey` FOREIGN KEY (`user_id_vote`) REFERENCES `users`(`cellphone`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyVotes` ADD CONSTRAINT `SurveyVotes_survey_id_fkey` FOREIGN KEY (`survey_id`) REFERENCES `survey`(`survey_id`) ON DELETE SET NULL ON UPDATE CASCADE;
