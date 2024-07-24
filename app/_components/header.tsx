import { Menu, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {

    const recentBlogs = [
        {title: 'Hi Aryan calling'},
        {title: "We have designed and built ecommerce experiences that have driven sales"},
        {title: 'Hi Aryan calling'},
        {title: 'Hi Aryan calling'},
        {title: 'Hi Aryan calling'}
    ]

    const recentComments = [
        {title: 'Hi Aryan calling'},
        {title: "We've designed and built ecommerce experiences that have driven sales"},
        {title: 'Hi Aryan calling'},
        {title: 'Hi Aryan calling'},
        {title: 'Hi Aryan calling'}
    ]

    const editorPicks = [
        {
            title: 'Understand Role and Importance of Personality Development',
            url: 'https://buzzzmaker.com/understand-role-and-importance-of-personality-development/',
            imageUrl: 'https://buzzzmaker.com/wp-content/uploads/2024/05/pexels-panditwiguna-1128318-150x150.jpg',
            author: 'buzzzmaker.com',
            date: 'May 30, 2024',
        },
        {
            title: 'Living Your Best Life',
            url: 'https://buzzzmaker.com/living-your-best-life/',
            imageUrl: 'https://buzzzmaker.com/wp-content/uploads/2024/05/pexels-godisable-jacob-226636-1154861-150x150.jpg',
            author: 'buzzzmaker.com',
            date: 'May 28, 2024',
        },
        {
            title: 'Welcome to Fashion Forward',
            url: 'https://buzzzmaker.com/welcome-to-fashion-forward/',
            imageUrl: 'https://buzzzmaker.com/wp-content/uploads/2024/05/pexels-shattha-pilabut-38930-135620-150x150.jpg',
            author: 'buzzzmaker.com',
            date: 'May 28, 2024',
        },
        {
            title: 'The Ultimate Guide to Health & Fitness',
            url: 'https://buzzzmaker.com/the-ultimate-guide-to-health-fitness/',
            imageUrl: 'https://buzzzmaker.com/wp-content/uploads/2024/05/pexels-bohlemedia-2803158-150x150.jpg',
            author: 'buzzzmaker.com',
            date: 'May 28, 2024',
        },
    ]

    return (
        <>

        <header id="site-header" className="top-0">
        <div id="drawer-navigation" className="z-50 fixed top-0 left-0 w-96 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" aria-labelledby="drawer-navigation-label">
            <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close menu</span>
            </button>
        <div id="drawer-navigation-label" className="py-4 overflow-y-auto">

            <div className="logo-wrapper w-full h-[70px] faux-heading flex items-center justify-center my-12">
                <a href="/" className="custom-logo-link" rel="home">
                <Image
                    src={"/logo.png"}
                    alt="buzzzmaker.com"
                    className="custom-logo"
                    width="154"
                    height="200"
                />
                </a>
            </div>

        <div className='flex items-center justify-center'>
            <div className="flex items-center max-w-md mx-auto bg-white rounded-lg " x-data="{ search: '' }">
                <div className="w-full">
                    <input type="search" className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                        placeholder="search" x-model="search" ></input>
                </div>
                <div>
                    <button type="button" className="text-white ml-1 bg-blue-300 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <Search />
                    </button>
                </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl text-black font-bold mt-6 mb-3">Recent Posts</h3>
                <div className="flex flex-col gap-1">
                    { recentBlogs.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="p-7 rounded-xl bg-theme-color-2 dark:bg-neutral-700/70">
                                    <p className="text-4 leading-7 text-linktext mb-2 dark:text-gray-400 font-semibold">{item.title}</p>
                                </div>
                            </>
                        )
                    })
                    }       
                </div>
            </div>

            <div>
                <h3 className="text-2xl text-black font-bold mt-6 mb-3">Recent Comments</h3>
                <div className="flex flex-col gap-1">
                    { recentComments.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="p-7 rounded-xl bg-theme-color-2 dark:bg-neutral-700/70">
                                    <p className="text-4 leading-7 text-linktext mb-2 dark:text-gray-400 font-semibold">{item.title}</p>
                                </div>
                            </>
                        )
                    })
                    }       
                </div>
            </div>

            <div>
                <h3 className="text-lg text-black font-bold mt-10 mb-3">Editors Pick</h3>
                <div className="flex flex-col gap-2">
                    { editorPicks.map((post, index) => {
                        return (
                            <>
                                <div key={index} className="widget-entry has-post-thumbnail flex flex-row">
                                        <div className="post-thumbnail rounded-lg pr-4 w-[40%]">
                                            <a href={post.url}>
                                            <img
                                                width="145px"
                                                height="145px"
                                                src={post.imageUrl}
                                                className="attachment-thumbnail size-thumbnail wp-post-image"
                                                alt=""
                                                decoding="async"
                                                loading="lazy"
                                            />
                                            </a>
                                        </div>
                                        <div className="entry-header">
                                            <a href={post.url} rel="bookmark" className="entry-title-link text-linktext font-bold">
                                            {post.title}
                                            </a>
                                            <div className="entry-meta after-title">
                                            <ul>
                                                <li className="entry-author-meta">
                                                <a className="text-linktext font-bold text-sm" href={`https://buzzzmaker.com/author/${post.author}/`}>
                                                    {post.author}
                                                </a>
                                                </li>
                                                <li className="entry-date">
                                                <time dateTime={post.date}>{post.date}</time>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                            </>
                        )
                    })
                    }       
                </div>
            </div>
        </div>
        </div>
            <nav className="menu-primary-navigation-container px-3 py-4 flex fixed w-full top-0 justify-center content-center bg-white z-[29] border-b-[1px]">
            <ul
                className="primary-nav flex items-center justify-between md:gap-12 px-4 gap-2"
                id="primary-nav"
            >
                <li className="toggle toggle-menu alignleft">
                <span className="px-5 py-3 font-bold text-linktext hover:text-linkhovertext cursor-pointer">
                <button className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                    <Menu className="text-linktext hover:text-linkhovertext"/>
                    </button>
                </span>
                </li>
                <li className="menu-item split-menu md:w-[500px] md:inline hidden">
                <div className="menu-split-menu-right-container md:inline hidden">
                    <ul id="split-menu-left" className="texts-left flex">
                    <li
                        id="menu-item-4443"
                        className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                    >
                        <Link href="/contact" role="button">
                        Contact
                        </Link>
                    </li>
                    <li
                        id="menu-item-4443"
                        className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                    >
                        <Link href="/finanace" role="button">
                        Finance
                        </Link>
                    </li>
                    <li
                        id="menu-item-4443"
                        className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                    >
                        <Link href="/ai-ar-vr" role="button">
                        AI/AR/VR
                        </Link>
                    </li>
                    <li
                        id="menu-item-4443"
                        className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                    >
                        <Link href="/viral" role="button">
                        Viral
                        </Link>
                    </li>
                    </ul>
                </div>
                </li>
                <li className="menu-item logo-in-menu">
                <div className="logo-wrapper w-[130px] h-[70px] faux-heading">
                    <a href="/" className="custom-logo-link" rel="home">
                    <Image
                        src={"/logo.png"}
                        alt="buzzzmaker.com"
                        className="custom-logo"
                        width="120"
                        height="200"
                    />
                    </a>
                </div>
                </li>
                <li className="menu-item split-menu w-full md:inline hidden">
                <div className="menu-split-menu-left-container">
                    <ul id="split-menu-right" className="flex flex-row">
                    <li
                        id="menu-item-4443"
                        className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                    >
                        <a href="https://buzzzmaker.com/contact/">Home</a>
                    </li>
                    <li
                        id="menu-item-4445"
                        className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                    >
                        <a href="https://buzzzmaker.com/category/finance/">
                        Travel
                        </a>
                    </li>
                    <li
                        id="menu-item-4444"
                        className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                    >
                        <a href="https://buzzzmaker.com/category/ai-ar-vr/">
                        Life Style
                        </a>
                    </li>
                    </ul>
                </div>
                </li>
                <li className="toggle toggle-search alignright">
                <span>
                    <Search />
                </span>
                </li>
            </ul>
            </nav>
        </header>
        </>
    )
}