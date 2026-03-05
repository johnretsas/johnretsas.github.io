const Tag = ({ tag }: { tag: string }) => {
  return (
    <span
      key={tag}
      className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--accent-subtle)] text-[var(--accent-dim)] border border-[var(--accent-border)]"
    >
      {tag}
    </span>
  );
};

export default Tag;
