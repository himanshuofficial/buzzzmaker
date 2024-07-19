"use server";

import { writeFile } from "fs/promises";
import path from "path";

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
    shortDescription: formData.get("shortDescription"),
    shortDesc: formData.get("shortDesc")
  });
  if (!validatedData.success) {
    console.log("Invalid Data as per schema");
    return {
      errors: {
        title: validatedData.error.flatten().fieldErrors,
      },
    };
  }
  console.log(formData)
  const file: any= formData.get("file");
  const { title, description, categoryId, shortDescription, shortDesc} = validatedData.data;
  let post;
  try {
    if (categoryId) {
      post = await db.post.create({
        data: {
          title,
          description,
          categoryId,
          shortDescription,
          shortDesc
        },
      });
    } else {
      post = await db.post.create({
        data: {
          title,
          description,
          shortDescription,
          shortDesc
        },
      });
    }
    if(file && file!="undefined") {
      console.log("isni")
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = Date.now() + file.name.replaceAll(" ", "_");
      await writeFile(
        path.join(process.cwd(), "public/uploads/" + filename),
        buffer
      );
      await db.image.create({
        data: {
          imageUrl: "/uploads/" + filename,
          postId: post.id
        }
      })
    }
    else {
      await db.image.create({
        data: {
          imageUrl: "/uploads/" + "default.jpg",
          postId: post.id
        }
      })
    }
  } catch (error) {
    console.log("Error is: ", error);
    return null;
  }

  redirect("/admin/dashboard")
};
