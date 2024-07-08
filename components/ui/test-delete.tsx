"use client";
import { deleteCategory } from "@/actions/category/delete-category";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  buttonText: string;
  fallbackMessage: string;
}

export const Button = ({ fallbackMessage, buttonText }: ButtonProps) => {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <button
        className="border-solid border-2 border-red-700"
        disabled={pending}
      >
        {fallbackMessage}
      </button>
    );
  } else {
    return (
      <button
        className="border-solid border-2 border-slate-700"
        disabled={pending}
      >
        {buttonText}
      </button>
    );
  }
};
