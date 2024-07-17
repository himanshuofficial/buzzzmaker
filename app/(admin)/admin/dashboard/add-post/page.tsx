import { fetchCategories } from "@/utils/dbutils";
import { AddPost } from "./_components/add-post";

const EditPost = async () => {

  const categoryList = await fetchCategories();
  
  return (
    <>
      <AddPost
        categories={categoryList as any}
      />
    </>
  );
};

export default EditPost;
