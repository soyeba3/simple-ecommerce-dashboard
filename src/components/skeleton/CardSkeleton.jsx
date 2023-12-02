function CardSkeleton() {
  return (
    <div className="flex flex-col gap-6 py-4 bg-white border border-gray-500 rounded-md animate-pulse">
      <div className="flex justify-center h-40 mx-4 bg-gray-400 rounded-md"></div>
      <div className="flex flex-col gap-2 px-4">
        <div className="flex items-center justify-between h-4 bg-gray-400 rounded-full"></div>
        <div className="flex items-center justify-between h-4 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
}

export default CardSkeleton;
