/*
  Warnings:

  - You are about to drop the column `user_id` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `refreshtoken` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `services` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[u_id]` on the table `refreshToken` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `u_id` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `u_id` to the `refreshToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `u_id` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `messages` DROP FOREIGN KEY `messages_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `refreshtoken` DROP FOREIGN KEY `refreshToken_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `services` DROP FOREIGN KEY `services_user_id_fkey`;

-- AlterTable
ALTER TABLE `messages` DROP COLUMN `user_id`,
    ADD COLUMN `u_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `refreshtoken` DROP COLUMN `user_id`,
    ADD COLUMN `u_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `services` DROP COLUMN `user_id`,
    ADD COLUMN `u_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `refreshToken_u_id_key` ON `refreshToken`(`u_id`);

-- AddForeignKey
ALTER TABLE `services` ADD CONSTRAINT `services_u_id_fkey` FOREIGN KEY (`u_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_u_id_fkey` FOREIGN KEY (`u_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `refreshToken` ADD CONSTRAINT `refreshToken_u_id_fkey` FOREIGN KEY (`u_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
