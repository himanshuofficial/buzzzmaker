import SideNavBar from "./_components/side-nav";
import PostList from "../post-list/page";
import { CategoryList } from "./_components/caetgory-list";

export default function AdminDashboard({ searchParams }: any) {
  const { currentPage } = searchParams;
  function renderCurrentSection() {
    switch (currentPage) {
      case "comment":
        // TODO: add comment page here
        return <PostList />;
      case "category":
        return <CategoryList />;
      default:
        return <PostList />;
    }
  }

  return (
    <>
      <div className="flex w-screen">
        <SideNavBar></SideNavBar>

        <div className="w-full">{renderCurrentSection()}</div>
      </div>
    </>
  );
}
