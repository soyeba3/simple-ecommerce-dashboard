import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import Pagination from "../components/pagination/Pagination";
import ProductCard from "../components/products/ProductCard";
import ProductsHeader from "../components/products/ProductsHeader";
import CardSkeleton from "../components/skeleton/CardSkeleton";

function Home() {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Fetching product data from fakestoreapi.com with a limit of 6
  const { isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products?limit=6")
        .then((res) => {
          if (!res.ok) {
            throw "Something went wrong!";
          }
          return res.json();
        })
        .then((data) => setProducts(data))
        .catch((err) => {
          throw err;
        }),
  });

  //Delete a Product
  const deletePost = useMutation((id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const filteredProducts = products.filter((item) => item.id !== id);
        setProducts(filteredProducts);
        setIsOpen(false);
      });
  });

  return (
    <div className="flex flex-col gap-4 px-5 py-8">
      <ProductsHeader />
      {error ? (
        <div className="flex items-center justify-center min-h-[80vh] text-negative-600">
          {error}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 py-4">
          {isLoading
            ? Array(6)
                .fill(1)
                .map((_, index) => <CardSkeleton key={index} />)
            : products?.map((item) => (
                <ProductCard
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  deletePost={deletePost}
                  key={item.id}
                  item={item}
                />
              ))}
        </div>
      )}
      <Pagination />
    </div>
  );
}

export default Home;
