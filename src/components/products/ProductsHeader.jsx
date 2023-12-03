import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import avatar from "/images/Avatar.png";

function ProductsHeader() {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-3xl font-semibold">Products</h2>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/products/create">
          <Button size="medium">Create new</Button>
        </Link>
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src={avatar} alt="avatar" />
          <div>
            <div className="flex items-center gap-5">
              <h3 className="text-sm font-semibold text-gray-700">
                Andrew Kyu
              </h3>
              <FaChevronDown className="w-4 h-4 text-gray-500" />
            </div>

            <p className="text-sm text-gray-500">User</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsHeader;
