import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineStarPurple500 } from "react-icons/md";

function ProductCard({ item = {} }) {
  const title = item.title.substring(0, 36);
  const rate = Math.floor(item.rating.rate);
  const withoutRate = 5 - rate;

  return (
    <div className="flex flex-col bg-white border border-gray-300 rounded-md">
      <div className="flex justify-center p-4 border-b border-gray-200">
        <img className="h-52" src={item.image} alt="img" />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">${item.price}</h2>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array(rate)
                  .fill(1)
                  .map((_, index) => (
                    <MdOutlineStarPurple500
                      key={index}
                      className="text-orange-500"
                    />
                  ))}
                {Array(withoutRate)
                  .fill(1)
                  .map((_, index) => (
                    <MdOutlineStarPurple500
                      key={index}
                      className="text-gray-500"
                    />
                  ))}
              </div>
              <div className="flex items-center text-orange-500">
                {item.rating.rate}
              </div>
            </div>
          </div>
          <div className="p-2 border border-gray-300 rounded-md cursor-pointer">
            <AiOutlineDelete className="w-6 h-6 text-negative-600" />
          </div>
        </div>
        <div>
          <h2 className="text-sm text-gray-800">
            {title.length < 36 ? title : title + "..."}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
