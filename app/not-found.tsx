import Link from "next/link";
import { FiAlertCircle, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <section>
      <FiAlertCircle size={32} className="text-[var(--accent)] mb-4" />
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">
        404 - Page Not Found
      </h1>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline"
      >
        <FiArrowLeft size={16} />
        Back home
      </Link>
    </section>
  );
}
