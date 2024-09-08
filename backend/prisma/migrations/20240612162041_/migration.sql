-- CreateEnum
CREATE TYPE "Category" AS ENUM ('ELETRONIC', 'CUPS_AND_BOTTLES', 'MATERIALS_AND_BAGS', 'ACCESSORIES', 'CLOTHES', 'CHARGERS_AND_CABLES', 'DOCUMENTS', 'OTHERS');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "imageKey" TEXT,

    CONSTRAINT "Objects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");
