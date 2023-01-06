-- CreateTable
CREATE TABLE `Ouvidoria` (
    `id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `cellphone` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `type` INTEGER NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `answered` BOOLEAN NOT NULL DEFAULT false,
    `answered_text` VARCHAR(191) NULL,
    `answered_when` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
