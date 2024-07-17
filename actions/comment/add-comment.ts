"use server"
import { z } from 'zod';

import { db } from "@/lib/db"
import { CommentSchema } from '@/schemas/schema';
import { isGeneratorFunction } from 'util/types';
import { revalidatePath } from 'next/cache';

export const addComment = async (postId: number, formData: FormData) => {
    const validatedData = CommentSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        website: formData.get("website"),
        comment: formData.get("comment"),
        postId,
    })
    console.log(validatedData.error?.flatten().fieldErrors)
    if(!validatedData.success) {
        console.log("invalid scheam")
        return {error: "Something went wrong"};
    }

    const {name, email, website, comment} = validatedData.data;
    console.log(name, email, website, comment)
    try {
        await db.comment.create({
            data: {
                name,
                comment,
                email,
                website,
                postId,
            }
        })
        revalidatePath(`/post/${postId}`)
    } catch(error) {
        console.log("error ", error)
    }

}