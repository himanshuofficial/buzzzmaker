
import { fetchPostById } from "@/utils/dbutils";
const Page = async () => {
  const post = await fetchPostById(30);

  return (
    <>
      home ppage
    </>
  );
};

export default Page;
