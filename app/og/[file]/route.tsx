import { getBlogPosts } from "app/blog/utils";
import { renderOgImage } from "app/components/og-image";

// Static export can't emit dynamic opengraph-image routes, so each post's
// image is prerendered here as /og/<slug>.png.
export const dynamic = "force-static";

export function generateStaticParams() {
  return [
    { file: "home.png" },
    ...getBlogPosts().map((post) => ({ file: `${post.slug}.png` })),
  ];
}

export async function GET(_request: Request, { params }) {
  const slug = params.file.replace(/\.png$/, "");
  if (slug === "home") {
    return renderOgImage("John Retsas", "Senior Full Stack Engineer");
  }
  const post = getBlogPosts().find((post) => post.slug === slug);
  return renderOgImage(post?.metadata.title ?? "John Retsas", "johnretsas.github.io");
}
