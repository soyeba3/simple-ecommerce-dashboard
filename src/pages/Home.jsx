import { useQuery } from "react-query";
import Pagination from "../components/Pagination";
import ProductCard from "../components/products/ProductCard";
import ProductsHeader from "../components/products/ProductsHeader";

function Home() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products?limit=6")
        .then((res) => {
          if (!res.ok) {
            throw "Something went wrong!";
          }
          return res.json();
        })
        .catch((err) => {
          throw err;
        }),
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
          {data?.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
      <Pagination />
    </div>
  );
}

export default Home;
