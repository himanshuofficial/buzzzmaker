import { PagePreview } from "./post-template";
import readingTime from "reading-time";
import { fetchPostById } from "@/utils/dbutils";

export const Post = async ({postid}: any) => {

  const postId = parseInt(postid);
  const post = await fetchPostById(postId);
  if(!post) {
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
      <div className="mx-auto max-w-5xl px-3 py-5">
        <section className="mb-5">
          <div className="text-6xl mb-2 font-bold">{post.title}</div>
          <div className="flex flex-col md:flex-row md:gap-3 text-slate-500">
            <span>
              by <b>BUZZMAKER.COM</b>
            </span>
            <span>{postCreatedDate}</span>
            <span>{readTime} MINUTE READ</span>
            {updated && <span>(Edited)</span>}
          </div>
        </section>

       <PagePreview post={post}/>
      </div>
    </>
  );
};
