import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="animate-fade-in">
      <h1 className="font-semibold text-4xl mb-3 tracking-tight">Blog</h1>
      <p className="text-neutral-500 dark:text-neutral-400 text-base mb-10">
        Thoughts on engineering, architecture, and things I've learned along the way.
      </p>
      <BlogPosts />
    </section>
  )
}
