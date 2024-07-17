"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface TitleProps {
  name?: string;
  onTitleChange: (data: string) => void;
}

export const TitleEdit = ({name, onTitleChange}: TitleProps) => {
  const [title, setTitle] = useState(name ?? "");22
  const handleTitleChange = (e: any) => {
    setTitle(e.target.value)
    onTitleChange(e.target.value)
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
      </CardContent>
    </Card>
  );
};
