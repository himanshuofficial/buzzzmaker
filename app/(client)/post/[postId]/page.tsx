import { Post } from "@/components/post";
import { fetchPostById } from "@/utils/dbutils";

const PublishedPost = async ({params}: any) => {

    const postId = parseInt(params?.postId);
    const postData = await fetchPostById(postId);

    return (
        <>
          <Post post={postData} />
        </>
      );
}

export default PublishedPost;