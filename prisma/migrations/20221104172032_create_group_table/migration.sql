-- AlterTable
ALTER TABLE `users` ADD COLUMN `groups_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `Groups` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subject` VARCHAR(191) NOT NULL,
    `group_name` VARCHAR(191) NOT NULL,
    `type` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_groups_id_fkey` FOREIGN KEY (`groups_id`) REFERENCES `Groups`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
