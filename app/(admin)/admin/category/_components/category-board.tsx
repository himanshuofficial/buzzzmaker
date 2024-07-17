import { deleteCategory } from "@/actions/category/delete-category";
import { FormSubmit } from "@/components/ui/FormSubmit";

interface CategoryProps  {
    id: number;
    name: string;
}

export const CategoryBoard = ({id, name}: CategoryProps) => {
    const deleteCategoryById = deleteCategory.bind(null, id); 
    return (
        <form action={deleteCategoryById}>
            <p>{name}</p>
            <FormSubmit fallbackMessage="Deleting" buttonText="Delete" variant="destructive"/>
        </form>
    )
}