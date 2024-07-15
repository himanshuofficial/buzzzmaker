import { fetchCategories, fetchPostById } from "@/utils/dbutils";
import { AddPost } from "../_components/add-post";

const EditPost = async ({ params }: { params: { postId: string } }) => {
  const postId = parseInt(params?.postId);
  const response: any = await Promise.all([
    fetchPostById(postId),
    fetchCategories(),
  ]);

  return (
    <>
      <AddPost
        postData={response[0]}
        categories={response[1]}
        postId={postId}
      />
    </>
  );
};

export default EditPost;
