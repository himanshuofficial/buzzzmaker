"use server";

import { writeFile } from "fs/promises";
import path from "path";

import { PostSchema } from "@/schemas/schema";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
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
    shortDesc: formData.get("shortDesc"),
    slug: formData.get("slug"),
  });
  if (!validatedData.success) {
    console.log("Invalid Data as per schema");
    return {
      errors: {
        title: validatedData.error.flatten().fieldErrors,
      },
    };
  }
  const file: any= formData.get("file");
  const { title, description, categoryId, shortDescription, shortDesc, slug} = validatedData.data;
  let post;
  try {
    if (categoryId) {
      post = await db.post.create({
        data: {
          title,
          description,
          categoryId,
          shortDescription,
          shortDesc,
          slug
        },
      });
    } else {
      post = await db.post.create({
        data: {
          title,
          description,
          shortDescription,
          shortDesc,
          slug
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
    if(error instanceof Prisma.PrismaClientKnownRequestError) {
      if(error.code === 'P2002') {
        return {error: "slug already exisits"}
      }
    }
    return null;
  }
};
