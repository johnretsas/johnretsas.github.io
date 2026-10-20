import Link from "next/link";

// Old misspelled slug; keeps existing links working.
export const metadata = {
  robots: { index: false },
  alternates: { canonical: "/blog/go-cheatsheet/" },
};

export default function Page() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/blog/go-cheatsheet/" />
      <p>
        Moved to <Link href="/blog/go-cheatsheet/">Go (Golang) Cheat Sheet</Link>.
      </p>
    </>
  );
}
