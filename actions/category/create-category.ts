"use server"
import { db } from "@/lib/db";
import { generateSlug } from "@/utils/common-utils";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const CreateCategory = async (formData: FormData) => {
  // check authentication
  console.log("Creatign category")
  let category;
  console.log(formData)
  console.log(formData.get("name"))
  if (formData.get("name")) {
    try {
      category = await db.category.create({
        data: {
          name: formData.get("name") as any,
          slug: generateSlug(formData.get("name") as any),
        },
      });
    } catch(error) {
      if(error instanceof Prisma.PrismaClientKnownRequestError) {
        if(error.code === 'P2002') {
          return {error: "Category already exisits"}
        }
      }
    }
  }
  revalidatePath("/admin/category")
  revalidatePath("/admin/dashboard/add-post")
};
