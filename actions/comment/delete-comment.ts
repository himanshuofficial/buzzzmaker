"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const deleteComment = async (commentId: number) => {
    console.log("deletecome")
    await db.comment.delete({
        where: {
            id: commentId
        }
    })
    console.log("deleted")
    revalidatePath(`/post/${commentId}`)
}