"use client";
import { generateHTML } from "@tiptap/react";
import { defaultExtensions } from "./text-editor/extensions/novel-extension";

export const PagePreview = ({ post }: any) => {
  let a = "";
  if (typeof window !== "undefined") {
    a = generateHTML(JSON.parse(post?.description || ""), defaultExtensions);
  } else {
    return null;
  }
  return (
    <article className="relative border-slate-500/50">
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: a }}
      ></div>
    </article>
  );
};
