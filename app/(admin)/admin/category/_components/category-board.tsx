import { deleteCategory } from "@/actions/category/delete-category";
import { Button } from "@/components/ui/test-delete";

interface CategoryProps  {
    id: number;
    name: string;
}

export const CategoryBoard = ({id, name}: CategoryProps) => {
    const deleteCategoryById = deleteCategory.bind(null, id); 
    return (
        <form action={deleteCategoryById}>
            <p>{name}</p>
            <Button fallbackMessage="Deleting" buttonText="Delete"/>
        </form>
    )
}