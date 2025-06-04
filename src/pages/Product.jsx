  import { useState, useEffect } from "react";
  
  import ProductCard from "../components/ProductCard";
  import { Toaster } from "react-hot-toast";
  import Footer from "../components/Footer";

  const Product = () => {
    const [product, setProduct] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("");

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);

    const filteredProducts = product.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = filteredProducts.sort((a, b) => {
      if (sortType === "price-asc") return a.price - b.price;
      if (sortType === "price-desc") return b.price - a.price;
      if (sortType === "rating") return b.rating?.rate - a.rating?.rate;
      return 0;
    });

    return (
    <>
        <Toaster position="top-right" reverseOrder={false} />
        <div className="min-h-screen bg-gray-100 p-6 mt-10">
          <h1 className="text-3xl font-bold text-center mb-6">🛍️ Our Store</h1>

          <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-2/3 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="w-full sm:w-1/3 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sort by</option>
              <option value="price-asc">Price - Low to High</option>
              <option value="price-desc">Price - High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Footer/>
      </>
    );
  };

  export default Product;
