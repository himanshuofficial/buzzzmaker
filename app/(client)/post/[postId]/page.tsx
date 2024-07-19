import { Post } from "@/components/post";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { fetchCommentsByPostId } from "@/utils/dbutils";
import { CommentSection } from "@/components/comment-section";
import { Separator } from "@/components/ui/separator";


const PublishedPost = async ({ params }: any) => {
  const comments = await fetchCommentsByPostId(parseInt(params?.postId));
  return (
    <>
      <Post postid={params?.postId} />
      <Separator />
      <Card className="mx-auto max-w-5xl px-3 py-5 m-3 md:m-auto">
        <CardContent>
          <CommentSection postId={params?.postId} comments={comments} />
        </CardContent>
      </Card>
    </>
  );
};

export default PublishedPost;
