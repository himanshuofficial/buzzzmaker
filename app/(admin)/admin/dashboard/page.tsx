import SideNavBar from "./_components/side-nav";
import PostList from "../post-list/page";
import { CategoryList } from "./_components/caetgory-list";

export default function AdminDashboard({ searchParams }: any) {
    const { currentPage } = searchParams;

    console.log(searchParams)

    let comp: any = ''
    switch (currentPage) {
        case "blog":
        // TODO: add comment page here
            comp = <PostList />;
        case "category":
            comp = <CategoryList />;
        default:
            comp = <PostList />;
    }


    return (
        <>
        <div className="flex w-screen">
            <SideNavBar></SideNavBar>

            <div className="w-full">{comp}</div>
        </div>
        </>
    );
}
