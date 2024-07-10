import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchCategories } from "@/utils/dbutils";

export const CategoryList = async () => {
  const categories = await fetchCategories();
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Available Categories</CardTitle>
        </CardHeader>
        <CardContent>

            
        </CardContent>
      </Card>
    </div>
  );
};
