import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Pagination() {
  return (
    <div className="flex items-center justify-between py-5 border-t border-gray-200">
      <div className="flex cursor-not-allowed items-center gap-2">
        <FaArrowLeft className="w-4 h-4 text-gray-400" />
        <p className="text-gray-400">Previous</p>
      </div>
      <div className="flex gap-1 items-center text-gray-500">
        <span className="p-3 cursor-pointer rounded-md bg-primary-50 text-primary-600">
          1
        </span>
        <span className="p-3 cursor-pointer">2</span>
        <span className="p-3 cursor-pointer">3</span>
        <span className="p-3 cursor-pointer">4</span>
        <span className="p-3 cursor-pointer">...</span>
        <span className="p-3 cursor-pointer">8</span>
        <span className="p-3 cursor-pointer">9</span>
        <span className="p-3 cursor-pointer">10</span>
      </div>
      <div className="flex cursor-pointer items-center gap-2">
        <p>Next</p>
        <FaArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}

export default Pagination;
