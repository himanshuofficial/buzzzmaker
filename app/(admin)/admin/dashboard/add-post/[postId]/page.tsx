import { fetchCategories, fetchPostByIdAdmin } from "@/utils/dbutils";
import { AddPost } from "../_components/add-post";

const EditPost = async ({ params }: { params: { postId: string } }) => {
  const postId = parseInt(params?.postId);
  const response: any = await Promise.all([
    fetchPostByIdAdmin(postId),
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
