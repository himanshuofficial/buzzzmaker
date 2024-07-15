import Link from "next/link";

export default function CategoryList() {
    return (
        <>
            <div className="">
                <h2 className="wp-block-heading font-bold text-3xl my-4 ">Categories</h2>
                <ul className="wp-block-archives-list wp-block-archives">
                    <li className="text-linktext w-full h-[40px] font-semibold"><Link href="https://buzzzmaker.com/2024/05/">Life style</Link></li>
                    <li className="text-linktext w-full h-[40px] font-semibold"><Link href="https://buzzzmaker.com/2018/10/">AI/VR/AV</Link></li>
                    <li className="text-linktext w-full h-[40px] font-semibold"><Link href="https://buzzzmaker.com/2018/05/">Fashion</Link></li>
                    <li className="text-linktext w-full h-[40px] font-semibold"><Link href="https://buzzzmaker.com/2018/04/">Finance</Link></li>
                    <li className="text-linktext w-full h-[40px] font-semibold"><Link href="https://buzzzmaker.com/2018/03/">Health & Fitness</Link></li>
                    <li className="text-linktext w-full h-[40px] font-semibold"><Link href="https://buzzzmaker.com/2018/01/">Travel</Link></li>
                </ul>
            </div>
        </>
    )
}