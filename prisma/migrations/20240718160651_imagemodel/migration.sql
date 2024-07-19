-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_postId_key" ON "Image"("postId");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
