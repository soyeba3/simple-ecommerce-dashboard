import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Pagination() {
  return (
    <div className="flex items-center justify-between py-5 border-t border-gray-200">
      <div className="flex items-center gap-2">
        <FaArrowLeft className="w-4 h-4 text-gray-400" />
        <p className="text-gray-400">Previous</p>
      </div>
      <div className="flex items-center text-gray-500">
        <span className="p-3 rounded-md bg-primary-50 text-primary-600">1</span>
        <span className="p-3">2</span>
        <span className="p-3">3</span>
        <span className="p-3">4</span>
        <span className="p-3">...</span>
        <span className="p-3">8</span>
        <span className="p-3">9</span>
        <span className="p-3">10</span>
      </div>
      <div className="flex items-center gap-2">
        <p>Next</p>
        <FaArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}

export default Pagination;
