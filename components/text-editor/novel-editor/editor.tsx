"use client";
import { CreatePost } from "@/actions/post/create-post";
import { createImageUpload } from "novel/plugins";
import { toast } from "sonner";
import { EditorContent, EditorRoot, JSONContent } from "novel";
import { useState } from "react";
import { defaultExtensions } from "@/components/text-editor/extensions/novel-extension";
import { handleCommandNavigation } from "novel/extensions";
import { slashCommand } from "@/components/text-editor/extensions/suggetions-items.js";
import { EditorCommand, EditorCommandEmpty, EditorCommandItem } from "novel";
import { suggestionItems } from "@/components/text-editor/extensions/suggetions-items.js";
import { handleImageDrop, handleImagePaste } from "novel/plugins";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const onUpload = async (file: File) => {
  const promise = fetch("/api/upload", {
    method: "POST",
    headers: {
      "content-type": file?.type || "application/octet-stream",
      "x-vercel-filename": file?.name || "image.png",
    },
    body: file,
  });
  return promise;
};

export const uploadFn = createImageUpload({
  onUpload,
  validateFn: (file) => {
    if (!file.type.includes("image/")) {
      toast.error("File type not supported.");
      return false;
    } else if (file.size / 1024 / 1024 > 20) {
      toast.error("File size too big (max 20MB).");
      return false;
    }
    return true;
  },
});

const extensions = [...defaultExtensions, slashCommand];

interface EditorProps {
  editorContent?: JSONContent
  onDescriptionChange: (data: JSONContent) => void;
}

const PostCreate = ({ editorContent, onDescriptionChange }: EditorProps) => {

  return (
    <Card className="m-5">
      <CardHeader className="border-b-2 ">
        <CardTitle>Description</CardTitle>
        <CardDescription>Add description here</CardDescription>
      </CardHeader>
      <CardContent className="py-8">
          <EditorRoot>
            <EditorContent
              extensions={extensions}
              editorProps={{
                handleDOMEvents: {
                  keydown: (_view, event) => handleCommandNavigation(event),
                },
                attributes: {
                  class: `prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full border-2 rounded-xl p-2 h-80 overflow-auto`,
                },
                handlePaste: (view, event) =>
                  handleImagePaste(view, event, uploadFn),
                handleDrop: (view, event, _slice, moved) =>
                  handleImageDrop(view, event, moved, uploadFn),
              }}
              initialContent={editorContent}
              onUpdate={({ editor }) => {
                const json = editor.getJSON();
                onDescriptionChange(json);
              }}
            >
              <EditorCommand className="z-50 h-auto max-h-[330px]  w-72 overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
                <EditorCommandEmpty className="px-2 text-muted-foreground">
                  No results
                </EditorCommandEmpty>
                {suggestionItems.map((item: any) => (
                  <EditorCommandItem
                    value={item.title}
                    onCommand={(val) => item.command(val)}
                    className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent `}
                    key={item.title}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </EditorCommandItem>
                ))}
              </EditorCommand>
            </EditorContent>
          </EditorRoot>
      </CardContent>
    </Card>
  );
};

export default PostCreate;
