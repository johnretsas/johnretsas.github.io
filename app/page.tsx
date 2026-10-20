import Link from "next/link";
import { BlogPosts } from "app/components/posts";
import { FiExternalLink } from "react-icons/fi";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <section className="animate-fade-in">
      <div className={styles.accentLine} />
      <h1 className="text-4xl font-semibold tracking-tight mb-8">
        Hey, I'm <span className={styles.warmText}>John</span>.
      </h1>
      <div className={`${styles.introSection} space-y-5 text-lg`}>
        <p className="text-xl text-neutral-900 dark:text-neutral-100">
          I build web products end to end, from React interfaces to the AWS
          services behind them, and keep them fast and reliable as they grow.
        </p>
        <p>
          I'm a Senior Full Stack Engineer at{" "}
          <a
            href="https://goodfit.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1"
          >
            <strong className={styles.warmText}>Goodfit.io</strong>
            <FiExternalLink className="inline text-[var(--accent-text)]" size={16} />
          </a>
          , working across{" "}
          <strong className={styles.strong}>AWS, TypeScript, and React</strong>.
          I started out in React and have since moved deeper into the backend;
          most of my side work is in{" "}
          <strong className={styles.strong}>Go</strong>: concurrent services,
          tail latency, and how systems behave at scale.
        </p>
        <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
          8+ years in industry · BSc &amp; MSc in Computer Science · UK
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-base">
          When I'm not coding I really enjoy reading, playing music, hiking, and
          traveling.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
          Featured Writing
        </h2>
        <BlogPosts category="featured" />
        <Link
          href="/blog"
          className="inline-block mt-6 text-base text-neutral-500 dark:text-neutral-400"
        >
          All posts →
        </Link>
      </div>
    </section>
  );
}
