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
        <p>
          Senior Full Stack Engineer based in the UK, with{" "}
          <strong className={styles.warmText}>8+ years of experience</strong>{" "}
          building high-performance, scalable web applications.
        </p>
        <p>
          I hold a{" "}
          <strong className={styles.warmText}>
            Bachelor's and MSc in Computer Science
          </strong>{" "}
          and currently work at{" "}
          <a
            href="https://goodfit.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1"
          >
            <strong className={styles.warmText}>Goodfit.io</strong>
            <FiExternalLink className="inline text-[var(--accent)]" size={16} />
          </a>
          , where I build with{" "}
          <strong className={styles.warmText}>
            AWS, TypeScript, and React
          </strong>
          .
        </p>
        <p>
          Outside of work, I explore{" "}
          <strong className={styles.warmText}>
            Go, Python, Rust, and Kotlin
          </strong>
          . I'm also passionate about serverless architecture with{" "}
          <strong className={styles.warmText}>AWS Lambda, S3, and SQS</strong>.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-base">
          When I'm not coding I really enjoy reading, playing music, hiking, and
          traveling.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
          Recent Writing
        </h2>
        <BlogPosts />
      </div>
    </section>
  );
}
