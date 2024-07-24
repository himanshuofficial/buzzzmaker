"use client";
import PostCreate from "@/components/text-editor/novel-editor/editor";
import { CategoryEdit } from "./category-edit";
import { TitleEdit } from "./title-edit";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { CreatePost } from "@/actions/post/create-post";
import { useFormState, useFormStatus } from "react-dom";
import { updatePost } from "@/actions/post/update-post";
import { ShortDescriptionEdit } from "./short-description";
import { generateHTML } from "@tiptap/react";
import toast from "react-hot-toast";
import { defaultExtensions } from "@/components/text-editor/extensions/novel-extension";

interface PostProps {
  postData?: {
    title: string;
    slug: string;
    category: {
      id: number;
      name: string;
    };
    description: string;
    shortDescription: string;
    shortDesc: string;
  };
  categories: {
    id: number;
    name: string;
  }[];
  postId?: number;
}

const Footer = () => {
  const { pending } = useFormStatus();
  return <footer className="mt-5 flex gap-2 m-5"></footer>;
};

export const AddPost = ({ postData, categories, postId }: PostProps) => {
  const [title, setTitle] = useState(postData?.title ?? "");
  const [category, setCategory] = useState(postData?.category?.id ?? null);
  const initialDescription = postData?.description ?? "{}";
  const [description, setDescription] = useState(
    JSON.parse(initialDescription)
  );
  const [slug, setSlug] = useState(postData?.slug ?? "");
  const [desc, setDesc] = useState(postData?.shortDesc);
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const selectedCategory = postData?.category?.id;

  const submitBlogData = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("categoryId", String(category));
    formData.append("description", JSON.stringify(description));
    formData.append("file", file as any);
    formData.append("shortDesc", String(desc));
    formData.append("slug", slug);

    try {
      const convertedData = generateHTML(description, defaultExtensions);
      formData.append("shortDescription", convertedData);
    } catch (error) {
      toast.error("There is some issue in description");
    }

    setLoading(true);
    if (postId) {
      const updatePostById = updatePost.bind(null, postId);
      const post = await updatePostById(formData);
      if (post?.error) {
        toast.error(post.error);
      } else {
        toast.success("Post updated successfully");
      }
    } else {
      const post = await CreatePost(formData);
      if (post?.error) {
        toast.error(post.error);
      } else {
        toast.success("post created successfully");
      }
    }
    setLoading(false);
  };

  return (
    <>
      <form>
        <TitleEdit
          onTitleChange={(title) => setTitle(title)}
          onSlugChange={(slug) => setSlug(slug)}
          name={postData?.title}
          initialSlug={postData?.slug}
        />
        <CategoryEdit
          onCategoryChange={(data) => setCategory(data)}
          selectedCategory={selectedCategory}
          categoryList={categories}
        />
        <PostCreate
          onDescriptionChange={(description: any) =>
            setDescription(description)
          }
          editorContent={description}
        />
        <ShortDescriptionEdit
          defaultDescription={desc ?? ""}
          onShortDescriptionChange={(shortDescription: any) =>
            setDesc(shortDescription)
          }
        />
        <label>Upload Image</label>
        <input type="file" onChange={(e: any) => setFile(e.target.files[0])} />
        <footer className="flex gap-2 m-5">
          <Button type="submit" onClick={submitBlogData} disabled={loading}>
            {loading ? " Submitting" : "Submit"}
          </Button>
          <Link href="/admin/dashboard">
            <Button type="button" disabled={loading}>
              Cancel
            </Button>
          </Link>
        </footer>
        <Footer></Footer>
      </form>
    </>
  );
};
