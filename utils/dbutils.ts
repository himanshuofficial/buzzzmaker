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
  console.log("fetch post")
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
        },
        Image: true
      }
    })
  }
  catch(error) {
    console.log(error);
    return null
  }
}

export const fetchPostsByCategoryId = async (categoryId: number) => {
  try {
    return await db.post.findMany({
      where: {
        categoryId
      },
      select: {
        title: true,
        description: true,
        id: true,
        category: {
          select: {
            name: true,
          }
        }
      }
    })
  } catch(error) {
    console.log(error)
    return null;
  }
}

export const fetchCommentsByPostId = async (postId: number) => {
  try {
    return await db.comment.findMany({
      where: {
        postId,
      },
      orderBy: {
        
        createAt: "desc"
      }
    })
  } catch(error) {
    return null;
  }
}

export const fetchPostsWithCategory = async (categoryId: number) => {
  try {
    return await db.post.findMany({
      where: {
        categoryId,
      },
      include: {
        category: {
          select: {
            name: true,

          }
        },
        _count: {
          select: {
            comments: true
          }
        },
        Image: true
      }, 
    })
  } catch(error) {
    console.log(error)
    return null
  }
}