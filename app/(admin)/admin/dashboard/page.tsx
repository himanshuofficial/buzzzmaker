import SideNavBar from "./_components/side-nav";
import PostList from "../post-list/page";
import { CategoryList } from "./_components/caetgory-list";

export default function AdminDashboard({ searchParams }: any) {
  const { currentPage } = searchParams;

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "blog":
        // TODO: add comment page here
        return <PostList />;
      case "category":
        return <CategoryList />;
      default:
        return <PostList />;
    }
  };

  return (
    <>
      <div className="sm:flex w-screen">
        <SideNavBar></SideNavBar>
        <div className="w-full">{renderCurrentPage()}</div>
      </div>
    </>
  );
}
