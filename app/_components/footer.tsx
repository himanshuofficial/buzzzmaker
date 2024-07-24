import { Facebook, FacebookIcon, Instagram, Twitter } from "lucide-react"
import { XIcon, InstagramIcon } from "lucide-react"
export default function FooterComp() {

    const popularPosts = [
        {
            title: 'Some Important Things about Photography',
            url: 'https://buzzzmaker.com/some-important-things-about-photography/',
            imageUrl: 'https://buzzzmaker.com/wp-content/uploads/2024/05/pexels-david-bartus-43782-610293-150x150.jpg',
            author: 'buzzzmaker.com',
            date: 'May 30, 2024',
        },
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
    ];
    
    const lifestylePosts = [
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
        {
            title: 'Exploring the World of Artificial Intelligence',
            url: 'https://buzzzmaker.com/exploring-the-world-of-artificial-intelligence/',
            imageUrl: 'https://buzzzmaker.com/wp-content/uploads/2024/05/pexels-tara-winstead-8386440-150x150.jpg',
            author: 'buzzzmaker.com',
            date: 'May 28, 2024',
        },
        {
            title: 'Magic of the Internet',
            url: 'https://buzzzmaker.com/magic-of-the-internet/',
            imageUrl: 'https://buzzzmaker.com/wp-content/uploads/2024/05/pexels-picjumbo-com-55570-196655-150x150.jpg',
            author: 'buzzzmaker.com',
            date: 'May 28, 2024',
        },
    ];
    
    const beautyPosts = [
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
    ];
    

    return (
        <>
            <footer id="colophon" className="site-footer mt-16 mb-8">

                <div className="container">



                    <div className="footer-widget-area footer-columns ">
                        <div className="flex-box footer-column-1 flex flex-col lg:flex-row gap-3">
                            <section id="threeforty_posts_widget-3" className="widget threeforty_posts_widget">
                                <h3 className="widget-title mb-6 text-xl font-bold">Popular</h3>

                                <div className="blog-posts flex flex-col gap-y-6">
                                    {popularPosts.map((post, index) => (
                                        <div key={index} className="widget-entry has-post-thumbnail flex flex-row">
                                        <div className="post-thumbnail rounded-lg pr-4 basic-28 shrink-0">
                                            <a href={post.url}>
                                            <img
                                                width="150"
                                                height="150"
                                                src={post.imageUrl}
                                                className="attachment-thumbnail size-thumbnail wp-post-image rounded-lg"
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
                                    ))}
                                </div>
                            </section>

                            <section id="threeforty_posts_widget-3" className="widget threeforty_posts_widget mt-8 lg:mt-0">
                                <h3 className="widget-title mb-6 text-xl font-bold">Life Style</h3>

                                <div className="blog-posts flex flex-col gap-y-6">
                                    {lifestylePosts.map((post, index) => (
                                        <div key={index} className="widget-entry has-post-thumbnail flex flex-row">
                                        <div className="post-thumbnail rounded-lg pr-4 basic-28 shrink-0">
                                            <a href={post.url}>
                                            <img
                                                width="150"
                                                height="150"
                                                src={post.imageUrl}
                                                className="attachment-thumbnail size-thumbnail wp-post-image rounded-lg"
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
                                    ))}
                                </div>
                            </section>

                            <section id="threeforty_posts_widget-3" className="widget threeforty_posts_widget mt-8 lg:mt-0">
                                <h3 className="widget-title mb-6 text-xl font-bold">Beauty</h3>

                                <div className="blog-posts flex flex-col gap-y-6">
                                    {beautyPosts.map((post, index) => (
                                        <div key={index} className="widget-entry has-post-thumbnail flex flex-row">
                                        <div className="post-thumbnail rounded-lg pr-4 basic-28 shrink-0">
                                            <a href={post.url}>
                                            <img
                                                width="150"
                                                height="150"
                                                src={post.imageUrl}
                                                className="attachment-thumbnail size-thumbnail wp-post-image rounded-lg"
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
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>


                    <div className="footer-widget-area footer-bottom flex-grid cols-1 mt-12">
                        <section id="threeforty_social_widget-1" className="widget threeforty_social_widget flex items-center justify-center gap-x-4">
                            <ul className="social-icons text-icon brand flex flex-row items-center content-center justify-center">
                                <li className="social-icon twitter flex">
                                    <a href="#" className="twitter text-slate-600 font-semibold flex gap-x-2" target="_blank">
                                        <span>
                                            <Twitter />
                                        </span>
                                        twitter
                                    </a>
                                </li>
                            </ul>

                            <ul className="social-icons text-icon brand flex flex-row items-center content-center">
                                <li className="social-icon twitter flex">
                                    <a href="#" className="twitter text-slate-600 font-semibold flex gap-x-2" target="_blank">
                                        <span>
                                            <Facebook />
                                        </span>
                                        facebook
                                    </a>
                                </li>
                            </ul>

                            <ul className="social-icons text-icon brand flex flex-row items-center content-center">
                                <li className="social-icon twitter flex">
                                    <a href="#" className="twitter text-slate-600 font-semibold flex gap-x-2" target="_blank">
                                        <span>
                                            <Instagram />
                                        </span>
                                        instagram
                                    </a>
                                </li>
                            </ul>

                            <ul className="social-icons text-icon brand flex flex-row items-center content-center">
                                <li className="social-icon twitter">
                                    <a href="#" className="twitter text-slate-600 font-semibold flex gap-x-2" target="_blank">
                                        <span>

                                        </span>
                                        vkontakte
                                    </a>
                                </li>
                            </ul>


                        </section>
                    </div>
            </footer>
        </>
    )
}