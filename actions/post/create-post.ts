"use server";

import { PostSchema } from "@/schemas/schema";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    categoryId?: string[];
  };
};

export const CreatePost = async (formData: FormData) => {
  const validatedData = PostSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    categoryId: formData.get("categoryId") ?? undefined,
  });
  if (!validatedData.success) {
    console.log("Invalid Data as per schema");
    return {
      errors: {
        title: validatedData.error.flatten().fieldErrors,
      },
    };
  }

  const { title, description, categoryId } = validatedData.data;
  let post;
  try {
    if (categoryId) {
      post = await db.post.create({
        data: {
          title,
          description,
          categoryId,
        },
      });
    } else {
      post = await db.post.create({
        data: {
          title,
          description,
        },
      });
    }
  } catch (error) {
    console.log("Error is: ", error);
    return null;
  }

  redirect("/admin/dashboard")
};
