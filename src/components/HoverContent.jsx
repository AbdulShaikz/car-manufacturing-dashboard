function HoverContent({content}) {
  return (
    <div className="absolute py-2 px-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:text-white">
      <h3 className="font-semibold text-gray-900 dark:text-white">
        {content}
      </h3>
    </div>
  );
}
export default HoverContent;
