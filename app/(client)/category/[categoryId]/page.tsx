import { PostGrid } from "@/components/layouts/post-grid";
import { fetchCategories, fetchPostsWithCategory } from "@/utils/dbutils";
import { Badge } from "@/components/ui/badge";
import { parse } from "path";
import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { categoryId: string };
}) {
  return {
    title: params?.categoryId,
  };
}

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  let posts = await fetchPostsWithCategory(params?.categoryId);
  const categories = await fetchCategories();
  const activeCategoryName = categories?.filter(
    (category) => category.slug === params?.categoryId
  )[0]?.name;

  return (
    <>
      <div className="flex gap-4 px-6 md:px-12 xl:px-6 my-10 flex-wrap justify-center mt-2">
        <Badge variant={"outline"} className="text-base">
          <Compass height={15} width={15} className="mr-1" />
          Explore
        </Badge>
        {categories?.map((category) => (
          <Link href={`/category/${category.slug}`} key={category.id}>
            <button>
              <Badge
                key={category.id}
                variant={"outline"}
                className={cn("text-base", {
                  "border-black": category.slug === params?.categoryId,
                })}
              >
                <Compass height={15} width={15} className="mr-1" />
                {category.name}
              </Badge>
            </button>
          </Link>
        ))}
      </div>
      <PostGrid data={posts} activeTagName={activeCategoryName} />
    </>
  );
};

export default CategoryPage;
