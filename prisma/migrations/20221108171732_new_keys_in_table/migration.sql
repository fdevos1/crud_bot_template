-- AlterTable
ALTER TABLE `groups` ADD COLUMN `created_on_wa` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `wa_group_id` VARCHAR(191) NULL;
