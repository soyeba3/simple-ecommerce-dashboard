import { useForm } from "react-hook-form";
import { FiUploadCloud } from "react-icons/fi";

import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/buttons/Button";
import image from "/images/Jacket.png";

function CreateProduct() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Create a product
  const mutation = useMutation({
    mutationFn: (value) => {
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...value, image: "https://i.pravatar.cc" }),
      })
        .then((res) => res.json())
        .then(() => {
          navigate("/products");
        });
    },
  });

  const onSubmit = (data) => mutation.mutate(data);

  return (
    <div className="flex flex-col gap-4 px-10 py-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between py-4 border-b border-gray-200">
          <div>
            <h3 className="text-lg font-semibold">Create product</h3>
            <p className="text-sm text-gray-600">
              Upload your product photo and details here.
            </p>
          </div>
          <div className="flex gap-2">
            <Link to="/products">
              <Button variant="outline" size="small">
                Cancel
              </Button>
            </Link>
            <Button type="submit" variant="primary" size="small">
              Create
            </Button>
          </div>
        </div>
        <div className="flex py-6 border-b border-gray-200 gap-14">
          <label className="w-1/4">Title</label>
          <div className="flex flex-col w-3/4 gap">
            <input
              {...register("title", { required: true })}
              className="w-3/4 px-2 py-1 border border-gray-200 rounded-md focus:outline-none"
              type="text"
            />
            {errors.title && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        <div className="flex py-6 border-b border-gray-200 gap-14">
          <label className="w-1/4">Price</label>
          <div className="flex flex-col w-3/4 gap-1">
            <input
              {...register("price", { required: true })}
              className="w-3/4 px-2 py-1 border border-gray-200 rounded-md focus:outline-none"
              type="number"
            />
            {errors.price && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        <div className="flex py-6 border-b border-gray-200 gap-14">
          <div className="w-1/4">
            <h5 className="font-medium text-gray-700">Profile photo</h5>
            <p className="text-xs text-gray-600">
              This will be displayed on your product
            </p>
          </div>
          <div className="flex w-3/4 gap-4">
            <div className="flex items-center justify-center px-10 py-4 bg-white rounded-md">
              <img src={image} alt="img" />
            </div>
            <div>
              <input type="file" id="files" className="hidden" />
              <label htmlFor="files">
                <div className="flex flex-col items-center w-4/6 gap-2 p-12 bg-white rounded-md cursor-pointer">
                  <div className="p-2 border-8 border-gray-100 rounded-full bg-gray-50">
                    <FiUploadCloud className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-700">
                      <span className="text-base font-semibold text-primary-600">
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
        <div className="flex py-6 border-b border-gray-200 gap-14">
          <div className="w-1/4">
            <p>Description</p>
            <p className="text-xs text-gray-600 ">
              Write a short introduction.
            </p>
          </div>
          <div className="flex flex-col w-3/4 gap-1">
            <textarea
              {...register("desc", { required: true })}
              rows={6}
              className="w-3/4 px-2 py-1 border border-gray-200 rounded-md focus:outline-none"
            />
            {errors.desc && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
