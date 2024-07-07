-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'JHimanshu'
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_id_key" ON "Test"("id");
