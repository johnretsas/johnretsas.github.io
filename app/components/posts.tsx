import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

type Category = 'featured' | 'writing' | 'note'

export function BlogPosts({
  category,
  limit,
}: {
  category?: Category
  limit?: number
}) {
  let allBlogs = getBlogPosts()
    .filter(
      (post) =>
        !category || (post.metadata.category ?? 'writing') === category
    )
    .sort((a, b) => {
      if (
        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ) {
        return -1
      }
      return 1
    })
    .slice(0, limit)

  return (
    <div className="flex flex-col gap-1">
      {allBlogs.map((post) => (
        <Link
          key={post.slug}
          className="group flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 py-3 px-3 -mx-3 rounded-lg transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
          href={`/blog/${post.slug}`}
        >
          <p className="font-mono text-sm text-neutral-500 tabular-nums shrink-0 w-[130px]">
            {formatDate(post.metadata.publishedAt, false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium text-lg group-hover:text-[var(--accent-text)] transition-colors">
            {post.metadata.title}
          </p>
        </Link>
      ))}
    </div>
  )
}
