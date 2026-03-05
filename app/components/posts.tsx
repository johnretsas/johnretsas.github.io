import Link from 'next/link'
import { FiCalendar } from 'react-icons/fi'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col gap-1">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 py-3 px-3 -mx-3 rounded-lg transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
            href={`/blog/${post.slug}`}
          >
            <p className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-500 text-base tabular-nums shrink-0 w-[160px]">
              <FiCalendar size={14} />
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium text-lg group-hover:text-[var(--accent)] transition-colors">
              {post.metadata.title}
            </p>
          </Link>
        ))}
    </div>
  )
}
