-- AlterTable
ALTER TABLE "Objects" ADD COLUMN     "devolutionId" TEXT,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Devolution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "objectId" TEXT NOT NULL,

    CONSTRAINT "Devolution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Devolution_objectId_key" ON "Devolution"("objectId");

-- AddForeignKey
ALTER TABLE "Devolution" ADD CONSTRAINT "Devolution_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "Objects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
