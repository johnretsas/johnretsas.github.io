import { BlogPosts } from "app/components/posts";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        Hi, I'm <strong className={styles.warmText}>John (or Yannis)</strong>{" "}
        👋! I'm a{" "}
        <strong className={styles.warmText}>
          Senior Full Stack Web Software Engineer 💻
        </strong>{" "}
        based in the UK 🇬🇧 with{" "}
        <strong className={styles.warmText}>7 years of experience</strong> 🏆,
        specializing in crafting high-performance, scalable web applications 🚀.
        <br />
        <br />I hold a{" "}
        <strong className={styles.warmText}>
          Bachelor's and MSc in Computer Science 🎓
        </strong>{" "}
        and currently work at{" "}
        <strong className={styles.warmText}>Trustpilot</strong> 🌟, where I
        bring ideas to life using{" "}
        <strong className={styles.warmText}>
          NextJS, Typescript, Javascript, and React
        </strong>{" "}
        ⚛️.
        <br />
        <br />
        While React is my go-to tool at work, I love exploring new technologies
        🌐 in my personal projects and at work. You'll often find me coding in{" "}
        <strong className={styles.warmText}>
          Golang, Python, Rust, and Kotlin
        </strong>{" "}
        . I'm also a big fan of serverless technologies ☁️ and have built
        several serverless applications using{" "}
        <strong className={styles.warmText}>
          AWS Lambda, AWS S3, and AWS SQS
        </strong>{" "}
        📦.
      </p>
      <p>
        When I'm not coding, you can find me reading 📚, playing music 🎸, or
        hiking 🥾. I also love traveling and exploring new cultures. 🌍
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
