/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `refreshToken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `refreshToken_user_id_key` ON `refreshToken`(`user_id`);
