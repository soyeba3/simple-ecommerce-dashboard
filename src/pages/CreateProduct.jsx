import { FiUploadCloud } from "react-icons/fi";
import Button from "../components/buttons/Button";
import image from "/public/images/Jacket.png";

function CreateProduct() {
  return (
    <div className="flex flex-col gap-4 px-10 py-6">
      <div className="flex justify-between py-4 border-b border-gray-200">
        <div>
          <h3 className="text-lg font-semibold">Create product</h3>
          <p className="text-gray-600 text-sm">
            Upload your product photo and details here.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="small">
            Cancel
          </Button>
          <Button variant="primary" size="small">
            Create
          </Button>
        </div>
      </div>
      <form>
        <div className="flex gap-14 py-6 border-b border-gray-200">
          <label className="w-1/4">Title</label>
          <div className="w-3/4">
            <input
              className="w-3/4 focus:outline-none px-2 py-1 rounded-md border border-gray-200"
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-14 py-6 border-b border-gray-200">
          <label className="w-1/4">Price</label>
          <div className="w-3/4">
            <input
              className="w-3/4 focus:outline-none px-2 py-1 rounded-md border border-gray-200"
              type="number"
            />
          </div>
        </div>
        <div className="flex gap-14 py-6 border-b border-gray-200">
          <div className="w-1/4">
            <h5 className="text-gray-700 font-medium">Profile photo</h5>
            <p className="text-xs text-gray-600">
              This will be displayed on your product
            </p>
          </div>
          <div className="w-3/4 flex gap-4">
            <div className="px-10 py-4 bg-white flex justify-center items-center rounded-md">
              <img src={image} alt="img" />
            </div>
            <div>
              <input type="file" id="files" className="hidden" />
              <label for="files">
                <div className="bg-white cursor-pointer w-4/6 flex flex-col gap-2 items-center rounded-md p-12">
                  <div className="p-2 rounded-full border-8 border-gray-100 bg-gray-50">
                    <FiUploadCloud className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 text-xs">
                      <span className="text-primary-600 text-base font-semibold">
                        Click to upload
                      </span>{" "}
                      or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex gap-14 py-6 border-b border-gray-200">
          <div className="w-1/4">
            <p>Description</p>
            <p className="text-gray-600 text-xs ">
              Write a short introduction.
            </p>
          </div>
          <div className="w-3/4">
            <textarea
              rows={6}
              className="w-3/4 focus:outline-none px-2 py-1 rounded-md border border-gray-200"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
