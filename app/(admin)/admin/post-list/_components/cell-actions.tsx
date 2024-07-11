import { deletePost } from "@/actions/post/delete-post";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { FormSubmit } from "@/components/ui/FormSubmit";

export const CellAction = ({ data }: any) => {
  const postId = parseInt(data.id);
  const deletePostById = deletePost.bind(null, postId);

  return (
    <form className="flex flex-col md:flex-row gap-1" action={deletePostById}>
      <FormSubmit
        variant="destructive"
        className="h-7 gap-1 text-sm"
        buttonText="Delete"
        fallbackMessage="Deleting"
        action="delete"
      />
      <Button
        size="sm"
        variant="outline"
        className="h-7 gap-1 text-sm border-solid border-2 border-slate-700"
        type="button"
      >
        <Edit className="h-3.5 w-3.5" />
        <span className="">Edit</span>
      </Button>
    </form>
  );
};
