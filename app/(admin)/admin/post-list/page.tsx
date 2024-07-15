import { Button } from "@/components/ui/button";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { fetchPosts } from "@/utils/dbutils";
import Link from "next/link";

export default async function PostList() {

  const data = await fetchPosts();

  console.log(data);

  return (
    <div className="container mx-auto py-10">
      <Link href="/admin/dashboard/add-post">
        <Button  className="mb-2" type="button">Add new blog</Button>
      </Link>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
