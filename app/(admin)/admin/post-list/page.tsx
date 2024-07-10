import { Post, columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"

function getData(): Post[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      title: 'Aryan',
      description: "pending",
      category: "m@example.com",
    },
    {
        id: "728ed52f",
       title: 'Himanshu',
        description: "pending",
        category: "m@example.com",
      }
  ]
}

export default function DemoPage() {
  const data = getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
