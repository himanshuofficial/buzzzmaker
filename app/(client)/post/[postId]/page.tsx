import { Post } from "@/components/post";
import { Loader } from "lucide-react";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { fetchCommentsByPostId } from "@/utils/dbutils";
import { CommentSection } from "@/components/comment-section";


const PublishedPost = async ({ params }: any) => {
  const comments = await fetchCommentsByPostId(parseInt(params?.postId));
  return (
    <>
      <Post postid={params?.postId} />
      <Card className="mx-auto max-w-5xl px-3 py-5">
        <CardHeader>
          <CardTitle>Comments</CardTitle>
        </CardHeader>
        <CardContent>
          <CommentSection postId={params?.postId} comments={comments} />
        </CardContent>
      </Card>
    </>
  );
};

export default PublishedPost;
