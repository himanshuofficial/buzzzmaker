"use server";

import { PostSchema } from "@/schemas/schema";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { writeFile } from "fs/promises";
import { unlinkSync } from "fs";
import path from "path";
import { Prisma } from "@prisma/client";

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    categoryId?: string[];
  };
};

export const updatePost = async (postId: number, formData: FormData) => {
  const validatedData = PostSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    categoryId: formData.get("categoryId") ?? undefined,
    shortDescription: formData.get("shortDescription"),
    shortDesc: formData.get("shortDesc"),
    slug: formData.get("slug")
  });
  if (!validatedData.success) {
    console.log("Invalid Data as per schema", validatedData.error.flatten().fieldErrors);
    return {
      errors: {
        title: validatedData.error.flatten().fieldErrors,
      },
    };
  }
  const file: any = formData.get("file");
  const { title, description, categoryId, shortDescription, shortDesc, slug} = validatedData.data;
  let post;
  try {
    if (categoryId) {
      post = await db.post.update({
        where: {
          id: postId,
        },
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
      post = await db.post.update({
        where: {
          id: postId,
        },
        data: {
          title,
          description,
          shortDescription,
          shortDesc,
          slug,
        },
      });
    }
    if (file && file!="undefined") {
      const filename = Date.now() + file.name.replaceAll(" ", "_");
      await db.image.update({
        where: {
          postId
        },
        data: {
          imageUrl: "/uploads/" + filename,
          postId: post.id,
        },
      });
      // if(path.join(process.cwd(), "public/uploads/" + filename) === "")
      // unlinkSync(path.join(process.cwd(), "public/uploads/" + filename));
      const buffer = Buffer.from(await file.arrayBuffer());

      await writeFile(
        path.join(process.cwd(), "public/uploads/" + filename),
        buffer
      );
    }
  } catch (error) {
    console.log("Error while updating post: ", error);
    if(error instanceof Prisma.PrismaClientKnownRequestError) {
      if(error.code === 'P2002') {
        return {error: "slug already exisits"}
      }
    }
    return null;
  }
  redirect("/admin/dashboard");
};
