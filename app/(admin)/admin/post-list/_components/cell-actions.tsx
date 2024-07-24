import { deletePost } from "@/actions/post/delete-post";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { FormSubmit } from "@/components/ui/FormSubmit";
import { redirect } from "next/navigation";
import Link from "next/link";
import { View } from "lucide-react";

export const CellAction = ({ data }: any) => {
  const postId = parseInt(data.id);
  const deletePostById = deletePost.bind(null, postId);

  return (
    <form className="flex flex-col md:flex-row gap-1" action={deletePostById}>
      <FormSubmit
        variant="destructive"
        className="h-7 gap-1 text-sm"
        fallbackMessage="Deleting"
        action="delete"
      />
      <Link href={`dashboard/add-post/${postId}`}>
        <Button
          size="sm"
          variant="outline"
          className="h-7 gap-1 text-sm border-solid border-2 border-slate-700"
          type="button"
          onClick={() => redirect(`/edit-post/${postId}`)}
        >
          <Edit className="h-3.5 w-3.5" />
        </Button>
      </Link>
      <Link href={`/post/${data.slug}`} target="__blank">
        <Button
          title="view"
          size="sm"
          variant="outline"
          className="h-7 gap-1 text-sm border-solid border-2 border-slate-700"
          type="button"
        >
          <View className="h-3.5 w-3.5" />
        </Button>
      </Link>
    </form>
  );
};
