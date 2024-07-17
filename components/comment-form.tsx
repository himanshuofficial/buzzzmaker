"use client";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { addComment } from "@/actions/comment/add-comment";
import toast from "react-hot-toast";
import { FormSubmit } from "./ui/FormSubmit";

export const CommentForm = ({ postId }: any) => {
  const addCommentById = addComment.bind(null, postId);
  const handlePostComment = async (formData: FormData) => {
    const response = await addCommentById(formData);
    if(response?.error) {
        toast.error(response.error)
    }
    else {
        toast.success("Comment posted successfully")
    }
  }
  return (
    <form className="mb-6" action={handlePostComment}>
      <Label htmlFor="comment">Your comment</Label>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <textarea
          name="comment"
          id="comment"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-2/4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="w-2/4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>
      <div className="my-4">
        <Label htmlFor="website">Website</Label>
        <Input id="website" name="website" type="text" />
      </div>
      <FormSubmit  fallbackMessage="Posting" buttonText="Post comment" variant="default"/>
    </form>
  );
};
