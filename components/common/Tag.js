const Tag = ({ text, ...rest }) => {
  return (
    <div
      className="tag bg-guru-blue inline-block text-center max-h-6 h-fulltext-white text-xs font-medium text-white px-2 py-1 mx-auto rounded-full mr-2"
      {...rest}
    >
      {text}
    </div>
  );
};

export default Tag;
