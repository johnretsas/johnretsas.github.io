const Tag = ({ tag }: { tag: string }) => {
  return (
    <span
      key={tag}
      className="tag p-2 bg-gray-200 dark:bg-orange-400 rounded-md"
    >
      {tag}
    </span>
  );
};

export default Tag;
