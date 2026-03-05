import Link from "next/link";
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

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row items-center gap-1">
            {Object.entries(navItems).map(([path, { name, icon }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-[var(--accent)] flex items-center gap-1.5 relative py-1.5 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 text-base font-medium"
                >
                  {icon}
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
