"use server"
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const CreateCategory = async (formData: FormData) => {
  // check authentication
  console.log("Creatign category")
  let category;
  console.log(formData)
  console.log(formData.get("name"))
  if (formData.get("name")) {
    category = await db.category.create({
      data: {
        name: formData.get("name") as any,
      },
    });
    console.log("created")
  }
  revalidatePath("/admin/category")
};
