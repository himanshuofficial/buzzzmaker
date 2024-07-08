import { CreateCategory } from "@/actions/category/create-category";
import { deleteCategory } from "@/actions/category/delete-category";
import { Button } from "@/components/ui/test-delete";
import { fetchCategories } from "@/utils/dbutils";
import { CategoryBoard } from "./_components/category-board";

const Category = async () => {
  const categoryList = await fetchCategories();

  if (categoryList?.length === 0) {
    return <p>No category found. Create one</p>;
  }
  console.log(categoryList);
  return (
    <>
      <div>
        <form action={CreateCategory}>
          <label htmlFor="id">Category Name</label>
          <input type="text" id="name" name="name"/>
          <Button fallbackMessage="Creating" buttonText="Create"/>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
      <div>
        <h2>Avalilable Categories</h2>
        <div>
          {categoryList?.map((category: { id: number; name: string }) => (
            <CategoryBoard key={category.id} id={category.id} name={category.name}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
