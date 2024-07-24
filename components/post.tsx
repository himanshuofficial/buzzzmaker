import { PagePreview } from "./post-template";
import readingTime from "reading-time";
import { fetchPostById } from "@/utils/dbutils";
import Image from "next/image";

export const Post = async ({ postid }: any) => {
  const post = await fetchPostById(postid);
  
  if (!post) {
    return null;
  }
  // TODO: make this call in preview section
  const readTime = Math.round(readingTime("kshfiaoshfo").minutes);
  const createdDate = post?.createdDate;
  const updated = !(createdDate.getTime() == post?.updatedDate.getTime());
  const dd = String(createdDate.getDate()).padStart(2, "0");
  const mm = String(createdDate.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = createdDate.getFullYear();

  const postCreatedDate = mm + "-" + dd + "-" + yyyy;

  return (
    <>
      <div className="mx-auto max-w-5xl px-3 py-5 pt-0">
        <div className="h-[500px] oveflow-hidden">
          <Image
            className="max-w-full rounded-lg shadow-xl dark:shadow-gray-800 object-cover m-auto mb-4 w-full h-full"
            src={post.Image?.imageUrl ?? "/uploads/default.jpg"}
            width="1500"
            height="100"
            alt="Main image"
          ></Image>
        </div>

        <section className="mb-5">
          <div className="text-3xl md:text-5xl mb-2 md:font-bold font-semibold">
            {post.title}
          </div>
          <div className="flex flex-col md:flex-row md:gap-3 text-slate-500">
            <span>
              by <b>BUZZMAKER.COM</b>
            </span>
            <span>{postCreatedDate}</span>
            <span>{readTime} MINUTE READ</span>
            {updated && <span>(Edited)</span>}
          </div>
        </section>
        <PagePreview post={post} />
      </div>
    </>
  );
};
