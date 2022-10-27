/*
  Warnings:

  - A unique constraint covering the columns `[wa_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `users_wa_id_key` ON `users`(`wa_id`);
