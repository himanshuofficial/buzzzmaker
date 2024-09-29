import { Post } from "@/components/post";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { fetchCommentsByPostId, getPostIdFromSlug } from "@/utils/dbutils";
import { CommentSection } from "@/components/comment-section";
import { Separator } from "@/components/ui/separator";

export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}) {
  return {
    title: params?.postId,
  };
}

const PublishedPost = async ({ params }: any) => {
  console.log("postid", params?.postId);
  // TODO:
  const postId = await getPostIdFromSlug(params?.postId)
  const comments = await fetchCommentsByPostId(postId ?? 1);
  return (
    <>
      <Post postid={params?.postId} />
      <Card className="mx-auto max-w-5xl px-3 py-5 m-3 md:m-auto">
        <CardContent>
          <CommentSection postId={postId} comments={comments} />
        </CardContent>
      </Card>
    </>
  );
};

export default PublishedPost;
