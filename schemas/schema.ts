import { z } from 'zod';

// export const CategorySchema = z.object({
//     name: z.string().min(3).max(255)
// })

export const PostSchema = z.object({
    title: z.string(),
    description: z.string().min(20, {message: "Description must be atleast 100 characters long"}),
    categoryId: z.coerce.number().optional()
})

export const CommentSchema = z.object({
    comment: z.string(),
    email: z.string(),
    postId: z.coerce.number(),
    name: z.string(),
    website: z.string().optional()
})