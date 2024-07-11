import { db } from "@/lib/db";

export const fetchCategories = async () => {
  try {
    return await db.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  } catch (error) {
    console.log("Error while fetching categories", error);
    return null;
  }
};

export const fetchPosts = async () => {
  let posts;
  try {
    posts = await db.post.findMany({
      select: {
        title: true,
        description: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return posts;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deletePost = async (id: number) => {
  try {
    const delete_post = await db.post.delete({
      where: {
        id: id,
      },
    })
  } catch (error) {
    console.error('some error occurred')
  }
}

