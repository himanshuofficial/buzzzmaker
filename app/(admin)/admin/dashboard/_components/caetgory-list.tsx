import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchCategories } from "@/utils/dbutils";
import { CategoryItem } from "./category-item";
import { Car } from "lucide-react";
import { CategoryCreate } from "./category-create";
import { Separator } from "@/components/ui/separator";

export const CategoryList = async () => {
  const categories = await fetchCategories();
  return (
    <div className="p-4">
      <Card className="mb-3">
        <CardHeader className="border-b-2">
          <CardTitle>
            {categories && <p>Available Categories</p>}
            {!categories && <p>No Categories Available</p>}
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-2">
          {categories &&
            categories?.map((category: any) => (
              <CategoryItem key={category.id} id={category.id} title={category.name} />
            ))}
        </CardContent>
      </Card>
      <CategoryCreate />
    </div>
  );
};
