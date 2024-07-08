"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const DeletePost = async (postId: number) => {
    try {
        const post = await db.post.delete({
            where: {
                id: postId
            }
        })
        console.log("Post Deleted")
    }
    catch(error) {
        console.log("Error while delting post: ", error);
        return null;
    }


    revalidatePath("/login/post")
}