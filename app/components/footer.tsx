const links = [
  { name: "github", href: "https://github.com/johnretsas" },
  { name: "dev.to", href: "https://dev.to/johnretsas" },
  { name: "source", href: "https://github.com/johnretsas/johnretsas.github.io" },
];

export default function Footer() {
  return (
    <footer className="mb-16 mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-sm text-neutral-500 dark:text-neutral-400">
      <ul className="flex flex-wrap items-center gap-x-2">
        {links.map(({ name, href }, i) => (
          <li key={name} className="flex items-center gap-x-2">
            {i > 0 && <span aria-hidden="true">·</span>}
            <a rel="noopener noreferrer" target="_blank" href={href}>
              {name}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-neutral-400 dark:text-neutral-600">
        &copy; {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
