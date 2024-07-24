"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateSlug } from "@/utils/common-utils";
import { useState } from "react";

interface TitleProps {
  name?: string;
  onTitleChange: (data: string) => void;
  onSlugChange: (slug: string) => void;
  initialSlug?: string;
}

export const TitleEdit = ({ name, initialSlug, onTitleChange, onSlugChange }: TitleProps) => {
  const [title, setTitle] = useState(name ?? "");
  const [slug, setSlug] = useState(initialSlug || "");
  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
    onTitleChange(e.target.value);
  };
  const generateSlugValue = () => {
    const slugValue = generateSlug(title);
    setSlug(slugValue);
    onSlugChange(slugValue);
  };

  const handleSlugEdit = (e: any) => {
    console.log(e.target.value)
    setSlug(e.target.value);
    onSlugChange(e.target.value);
  }


  return (
    <Card className="m-5">
      <CardHeader className="border-b-2">
        <CardTitle>General information</CardTitle>
        <CardDescription>Update your post general information</CardDescription>
      </CardHeader>
      <CardContent className="py-8">
        <Label htmlFor="title">Title</Label>
        <Input type="title" value={title} onChange={handleTitleChange}></Input>
        <Label htmlFor="title">Slug Value</Label>
        <Input
          type="slugValue"
          required
          value={slug}
          onChange={handleSlugEdit}
        ></Input>
        <Button className="mt-2" type="button" onClick={generateSlugValue}>
          Generate slug
        </Button>
      </CardContent>
    </Card>
  );
};
