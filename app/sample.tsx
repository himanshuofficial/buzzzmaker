"use client";
import { generateHTML } from "@tiptap/react";
import { defaultExtensions } from "@/components/text-editor/extensions/novel-extension";
import readingTime from "reading-time";

export const Sample = ({ post }: any) => {

  const a = generateHTML(
    JSON.parse(post?.description || ""),
    defaultExtensions
  );
  const readTime = Math.round(readingTime(a).minutes);
  console.log(readTime);
  const createdDate = post?.createdDate;
  const updated = !(createdDate === post?.updatedDate);

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

        <article className="relative border-slate-500/50">
          <div
            className="prose prose-lg"
            dangerouslySetInnerHTML={{ __html: a }}
          ></div>
        </article>
      </div>
    </>
  );
};
