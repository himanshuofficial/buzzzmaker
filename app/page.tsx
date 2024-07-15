
import { fetchPostById } from "@/utils/dbutils";
import { Sample } from "./sample";
const Page = async () => {
  const post = await fetchPostById(30);

  return (
    <>
      <Sample post={post} />
    </>
  );
};

export default Page;
