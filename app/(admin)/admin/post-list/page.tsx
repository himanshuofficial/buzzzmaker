import { Post, columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import { fetchPosts } from "@/utils/dbutils"

export default async function PostList() {
//   const data =  [
//     {
//       id: "728ed52f",
//       title: 'Aryan',
//       description: "pending",
//       category: "m@example.com",
//     },
//     {
//         id: "728ed52f",
//        title: 'Himanshu',
//         description: "pending",
//         category: "m@example.com",
//       }
//   ]

  const data = await fetchPosts();

  console.log(data);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
