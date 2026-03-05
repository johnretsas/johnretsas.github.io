import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";
import Tag from "app/components/tag";
import { ScrollProgress } from "app/components/scroll-progress";
import { FiCalendar } from "react-icons/fi";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ScrollProgress />
      <section className="animate-fade-in">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: "John Retsas",
              },
            }),
          }}
        />
        <header className="mb-10">
          <h1 className="title font-semibold text-4xl tracking-tight mb-3">
            {post.metadata.title}
          </h1>
          <p className="flex items-center gap-1.5 text-base text-neutral-500 dark:text-neutral-400 mb-4">
            <FiCalendar size={14} />
            {formatDate(post.metadata.publishedAt)}
          </p>
          {post.metadata.tags && (
            <div className="flex gap-2 flex-wrap">
              {post.metadata.tags
                .split(",")
                .map((tag) => <Tag key={tag} tag={tag.trim()} />)}
            </div>
          )}
        </header>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </section>
    </>
  );
}
