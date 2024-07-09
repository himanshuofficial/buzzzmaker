import { z } from 'zod';

// export const CategorySchema = z.object({
//     name: z.string().min(3).max(255)
// })

export const PostSchema = z.object({
    title: z.string(),
    description: z.string(),
    categoryId: z.coerce.number().optional()
})

