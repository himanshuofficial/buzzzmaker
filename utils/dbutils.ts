import { db } from "@/lib/db";
import { Trykker } from "next/font/google";

export const fetchCategories = async () => {
  try {
    console.log("fetching")
    return await db.category.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
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
        title: true,
        description: true,
        slug: true,
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

export const fetchPostById = async (id: string) => {
  try {
    return await  db.post.findUnique({
      where: {
        slug: id,
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        Image: true,
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchPostByIdAdmin = async (id: number) => {
  try {
    return await db.post.findUnique({
      where: {
        id,
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        Image: true,
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchPostsByCategoryId = async (categoryId: number) => {
  try {
    return await db.post.findMany({
      where: {
        categoryId,
      },
      select: {
        title: true,
        description: true,
        id: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchCommentsByPostId = async (postId: number) => {
  try {
    return await db.comment.findMany({
      where: {
        postId,
      },
      orderBy: {
        createAt: "desc",
      },
    });
  } catch (error) {
    return null;
  }
};

export const fetchPostsWithCategory = async (categoryId: string) => {
  console.log(categoryId, "sdf");
  try {
    const category = await db.category.findUnique({
      where: {
        slug: categoryId,
      },
      select: {
        id: true,
      },
    });
    if (category)
      return await db.post.findMany({
        where: {
          categoryId: category?.id,
        },
        include: {
          category: {
            select: {
              name: true,
            },
          },
          _count: {
            select: {
              comments: true,
            },
          },
          Image: true,
        },
      });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getLastFivePosts = async () => {
  try {
    const posts = await db.post.findMany({
      select: {
        title: true,
        id: true,
        createdDate: true,
        Image: {
          select: {
            imageUrl: true,
          },
        },
      },
      take: 5,
      orderBy: {
        updatedDate: "desc",
      },
    });
    console.log(posts);
    return posts;
  } catch (error) {
    return null;
  }
};

export const getLastFiveComments = async () => {
  try {
    const comments = await db.comment.findMany({
      select: {
        id: true,
        comment: true,
        postId: true,
      },
      take: 5,
      orderBy: {
        createAt: "desc",
      },
    });
    console.log(comments);
    return comments;
  } catch (error) {
    return null;
  }
};


export const getPostIdFromSlug = async (postId: string) => {
  try {
    const posts = await db.post.findUnique({
      where: {
        slug: postId
      },
      select: {
        id: true
      }
    })
    return posts?.id;
  } catch(e) {
    console.log(e);
    return null;
  }
}