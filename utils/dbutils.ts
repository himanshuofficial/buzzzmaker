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

  // TODO: pagination is pending
  let posts;
  try {
    posts = await db.post.findMany({
      select: {
        id: true,
        id: true,
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

export const fetchPostById = async (id: number) => {
  try {
    return await db.post.findUnique({
      where: {
        id
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    })
  }
  catch(error) {
    console.log(error);
    return null
  }
}