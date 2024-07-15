import Link from "next/link";

export default function ArchiveBlogs() {
    return (
        <>
            <div className="">
                <h2 className="wp-block-heading font-bold text-3xl my-4 ">Archives</h2>
                <ul className="wp-block-archives-list wp-block-archives">
                    <li className="text-linktext w-full h-[40px] font-semibold"><Link href="https://buzzzmaker.com/2024/05/">May 2024</Link></li>
                    <li className="text-linktext w-full h-[40px] font-semibold"><Link href="https://buzzzmaker.com/2018/10/">October 2018</Link></li>
                    <li className="text-linktext w-full h-[40px] font-semibold"><Link href="https://buzzzmaker.com/2018/05/">May 2018</Link></li>
                    <li className="text-linktext w-full h-[40px] font-semibold"><Link href="https://buzzzmaker.com/2018/04/">April 2018</Link></li>
                    <li className="text-linktext w-full h-[40px] font-semibold"><Link href="https://buzzzmaker.com/2018/03/">March 2018</Link></li>
                    <li className="text-linktext w-full h-[40px] font-semibold"><Link href="https://buzzzmaker.com/2018/01/">January 2018</Link></li>
                </ul>
            </div>
        </>
    )
}