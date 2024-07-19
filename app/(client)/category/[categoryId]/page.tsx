import { PostGrid } from "@/components/layouts/post-grid";
import { fetchCategories, fetchPostsWithCategory } from "@/utils/dbutils";
import { Badge } from "@/components/ui/badge";
import { parse } from "path";
import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const categoryId = parseInt(params?.categoryId);
  let posts = await fetchPostsWithCategory(parseInt(params?.categoryId));
  const categories = await fetchCategories();
  const activeCategoryName = categories?.filter((category) => category.id === categoryId)[0]?.name;

  return (
    <>
      <div className="flex gap-4 px-6 md:px-12 xl:px-6 my-10 flex-wrap justify-center mt-2">
        <Badge variant={"outline"} className="text-base">
          <Compass height={15} width={15} className="mr-1" />
          Explore
        </Badge>
        {categories?.map((category) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <button>
              <Badge
                key={category.id}
                variant={"outline"}
                className={cn("text-base", {
                  "border-black": category.id === categoryId,
                })}
              >
                <Compass height={15} width={15} className="mr-1" />
                {category.name}
              </Badge>
            </button>
          </Link>
        ))}
      </div>
      <PostGrid data={posts} activeTagName={activeCategoryName}/>
    </>
  );
};

export default CategoryPage;
