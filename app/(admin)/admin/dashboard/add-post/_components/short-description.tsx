"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface CategoryProps {
  defaultDescription: string;
  onShortDescriptionChange: (data: string) => void;
}

export const ShortDescriptionEdit = ({
  defaultDescription,
  onShortDescriptionChange,
}: CategoryProps) => {
  const [description, setDescription] = useState(defaultDescription ?? "");
  const onDescriptionChange = (e: any) => {
    console.log(e);
    const description = e.target.value;
    setDescription(description);
    onShortDescriptionChange(description)
  };
  return (
    <Card className="m-5">
      <CardHeader className="border-b-2">
        <CardTitle>Short Description</CardTitle>
        <CardDescription>Add a short description to post</CardDescription>
      </CardHeader>
      <CardContent className="py-8">
        <Label htmlFor="shortDescription"></Label>
        <Input
          type="textarea"
          value={description}
          onChange={(e) => onDescriptionChange(e)}
          maxLength={100}
        ></Input>
      </CardContent>
    </Card>
  );
};
