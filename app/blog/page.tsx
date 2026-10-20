import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

const sections = [
  { category: 'featured', title: 'Featured' },
  { category: 'writing', title: 'Writing' },
  { category: 'note', title: 'Notes' },
] as const

export default function Page() {
  return (
    <section className="animate-fade-in">
      <h1 className="font-semibold text-4xl mb-3 tracking-tight">Blog</h1>
      <p className="text-neutral-500 dark:text-neutral-400 text-base mb-10">
        Thoughts on engineering, architecture, and things I've learned along the way.
      </p>
      <div className="flex flex-col gap-12">
        {sections.map(({ category, title }) => (
          <div key={category}>
            <h2 className="font-mono text-sm uppercase tracking-wider text-neutral-500 mb-3">
              {title}
            </h2>
            <BlogPosts category={category} />
          </div>
        ))}
      </div>
    </section>
  )
}
