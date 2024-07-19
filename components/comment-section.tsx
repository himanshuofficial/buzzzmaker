import { fetchCommentsByPostId } from "@/utils/dbutils";
import { CommentForm } from "./comment-form";
import { Trash } from "lucide-react";
import { getSession } from "@/lib/auth";
import { deleteComment } from "@/actions/comment/delete-comment";

const DeleteButton = ({ buttonId }: any) => {
  console.log(buttonId);
  const deleteCommentById = deleteComment.bind(null, buttonId);
  console.log(deleteCommentById);

  return (
    <form action={deleteCommentById}>
      <button
        className="flex items-center gap-1 text-sm text-red-500 hover:underline dark:text-gray-400 font-medium"
      >
        <Trash size={15} />
        <span>Delete</span>
      </button>
    </form>
  );
};

export const CommentSection = async ({ postId }: any) => {
  const isAdmin = await getSession();

  postId = parseInt(postId);

  const comments = await fetchCommentsByPostId(postId);

  const generateDate = (date: any) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = date.getFullYear();
    return mm + "-" + dd + "-" + yyyy;
  };

  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion ({comments?.length})
          </h2>
        </div>
        <CommentForm postId={postId} />
        {comments?.map((comment) => (
          <article
            className="p-6 text-base bg-white rounded-lg dark:bg-gray-900"
            key={comment.id}
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough"
                  />
                  {comment.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time>{generateDate(comment.createAt)}</time>
                </p>
              </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">
              {comment.comment}
            </p>
            {isAdmin && (
              <div className="flex items-center mt-4 space-x-4">
                <DeleteButton buttonId={comment.id} />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
