import { FaDev, FaGitAlt } from "react-icons/fa";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16 mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <ul className="text-base flex flex-col space-y-2 md:flex-row md:space-x-6 md:space-y-0 text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center gap-2 transition-all hover:text-[var(--accent)]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/johnretsas"
          >
            <ArrowIcon />
            <span>github</span>
            <FaGitAlt size={16} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 transition-all hover:text-[var(--accent)]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/johnretsas/johnretsas.github.io"
          >
            <ArrowIcon />
            <span>source</span>
            <FaGitAlt size={16} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 transition-all hover:text-[var(--accent)]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://dev.to/johnretsas"
          >
            <ArrowIcon />
            <span>dev.to</span>
            <FaDev size={16} />
          </a>
        </li>
      </ul>
      <p className="mt-6 text-sm text-neutral-400 dark:text-neutral-600">
        &copy; {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
