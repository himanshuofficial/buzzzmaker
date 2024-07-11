"use client"
import { deleteCategory } from "@/actions/category/delete-category";
import { FormSubmit } from "@/components/ui/FormSubmit";
import { Separator } from "@/components/ui/separator";
import { useRef } from "react";

export const CategoryItem = ({ id, title }: { id: number; title: string }) => {
  const deleteCategoryById = deleteCategory.bind(null, id);

  return (
    <>
      <form
        className="flex justify-between items-center mb-1 p-1"
        action={deleteCategoryById}
      >
        <span>{title}</span>
        <FormSubmit
          fallbackMessage="Deleting"
          buttonText="Delete"
          variant="destructive"
        />
      </form>
      <Separator />
    </>
  );
};
