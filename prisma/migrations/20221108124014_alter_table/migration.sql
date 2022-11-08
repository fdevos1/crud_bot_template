/*
  Warnings:

  - You are about to drop the column `created_at` on the `attendants` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `messages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `attendants` DROP COLUMN `created_at`,
    ADD COLUMN `user_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `messages` DROP COLUMN `created_at`,
    ADD COLUMN `message_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
