/*
  Warnings:

  - You are about to alter the column `name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(120)`.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(120)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(120)`.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(120),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(120),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(120);

-- CreateTable
CREATE TABLE "memories" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(120) NOT NULL,
    "description" TEXT NOT NULL,
    "coverImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "memories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "memories_description_key" ON "memories"("description");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "memories" ADD CONSTRAINT "memories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
