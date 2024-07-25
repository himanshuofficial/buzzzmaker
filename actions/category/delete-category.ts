"use server"
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteCategory = async (id: number) => {
    // check authentication

    await db.category.delete({
        where: {
            id
        }
    })
    revalidatePath("/admin/category")
    revalidatePath("/admin/dashboard/add-post")
  };