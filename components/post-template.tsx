"use client";
import { generateHTML } from "@tiptap/react";
import { useEffect, useState } from "react";
import { defaultExtensions } from "./text-editor/extensions/novel-extension";

export const PagePreview = ({ post }: any) => {
  const [postData, setPostData] = useState('')

  useEffect(() => {

    setPostData(generateHTML(JSON.parse(post?.description || ""), defaultExtensions));
  }, [])

  return (
    <article className="relative border-slate-500/50">
      { postData && 
        <div
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: postData }}
        ></div>
      }
    </article>
  );
};
