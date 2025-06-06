import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";
import Image from "next/image";

export const metadata = {
  title: "Menu",
  description: "Menu positions in Shady Garden",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
    <div className="pb-24 prose prose-neutral dark:prose-invert ">
<pre className="prose prose-neutral dark:prose-invert ">
List of menu items:
</pre>
    </div>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            
          <pre>
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4 transition-opacity duration-200 hover:opacity-80"
              href={`/menu/${post.slug}`}
            >
             <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                    <h3 className="text-black text-lg not-italic hover:italic dark:text-white tracking-tight">
                                           {post.metadata.title}
                    </h3>
                            <Image height={180} width={250}  alt={`${post.metadata.title}`} src={`${post.metadata.image}`}/>
                                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
            </div>
            </Link>
          </pre>
            
          ))}
           
      </div>
    </section>
  );
}
