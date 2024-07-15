"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { Save, Trash } from "lucide-react";

interface ButtonProps {
  buttonText?: string;
  fallbackMessage: string;
  variant: "default" | "destructive" | "outline";
  className?: string;
  onPending?: (pending: boolean) => void | undefined;
  action?: "delete" | "submit";
}

export const FormSubmit = ({
  fallbackMessage,
  buttonText,
  variant,
  className,
  onPending,
  action,
}: ButtonProps) => {
  const { pending } = useFormStatus();
  if (onPending) {
    console.log("pending", pending);
    onPending(pending);
  }
  if (pending) {
    return (
      <Button
        className={cn("border-solid border-2 border-slate-700", className)}
        disabled={pending}
        variant={variant}
        size="sm"
      >
        {action === "delete" && <Trash className="h-3.5 w-3.5" />}
        {action === "submit" && <Save className="h-3.5 w-3.5" />}
        {fallbackMessage}
      </Button>
    );
  } else {
    return (
      <Button
        type="submit"
        variant={variant}
        className={cn("border-solid border-2 border-slate-700", className)}
        size="sm"
      >
        {action === "delete" && <Trash className="h-3.5 w-3.5" />}
        {action === "submit" && <Save className="h-3.5 w-3.5" />}
        {buttonText}
      </Button>
    );
  }
};
