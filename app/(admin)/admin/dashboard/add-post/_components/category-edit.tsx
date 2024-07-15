import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface CategoryProps {
  categoryList: {
    id: number;
    name: string;
  }[];
  selectedCategory?: number;
  onCategoryChange: (data: number) => void;
}

export const CategoryEdit = ({
  categoryList,
  selectedCategory,
  onCategoryChange
}: CategoryProps) => {

  const categoryChange = (e: any) => {
    onCategoryChange(e)
  }

  return (
    <Card className="m-5">
      <CardHeader className="border-b-2">
        <CardTitle>Category</CardTitle>
        <CardDescription>Select your category</CardDescription>
      </CardHeader>
      <CardContent className="py-8">
        <RadioGroup defaultValue={String(selectedCategory)} onValueChange={categoryChange} className="flex flex-col gap-3">
          {categoryList.map((category: any) => (
            <div className="flex items-center space-x-2" key={(category.id)}>
              <RadioGroupItem value={category.id} id="{category.id}"/>
              <Label htmlFor={category.id}>{category.name}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};
