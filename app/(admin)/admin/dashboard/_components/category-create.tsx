import { deleteCategory } from "@/actions/category/delete-category";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchCategories } from "@/utils/dbutils";
import { CategoryItem } from "./category-item";
import { Input } from "@/components/ui/input";
import { FormSubmit } from "@/components/ui/FormSubmit";
import { CreateCategory } from "@/actions/category/create-category";

export const CategoryCreate = async () => {
  return (
    <Card>
      <CardHeader className="border-b-2">
        <CardTitle>Add New Category</CardTitle>
      </CardHeader>
      <CardContent className="mt-2">
        <form action={CreateCategory} className="flex gap-2">
          <Input className="mb-3" type="text" name="name" placeholder="Category name" required/>
          <FormSubmit fallbackMessage="Creating" buttonText="Add Category"  variant="default"/>
        </form>
      </CardContent>
    </Card>
  );
};
