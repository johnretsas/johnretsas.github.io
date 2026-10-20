"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBookOpen } from "react-icons/fi";

const navItems = {
  "/": {
    name: "home",
    icon: <FiHome size={16} />,
  },
  "/blog": {
    name: "blog",
    icon: <FiBookOpen size={16} />,
  },
};

function isActive(pathname: string, path: string) {
  return path === "/" ? pathname === "/" : pathname.startsWith(path);
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <nav className="flex flex-row items-center gap-1" id="nav">
        {Object.entries(navItems).map(([path, { name, icon }]) => {
          const active = isActive(pathname, path);
          return (
            <Link
              key={path}
              href={path}
              aria-current={active ? "page" : undefined}
              className={`transition-all hover:text-[var(--accent-text)] flex items-center gap-1.5 relative py-1.5 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 text-base font-medium ${
                active
                  ? "text-[var(--accent-text)] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-[var(--accent)]"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              {icon}
              {name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
