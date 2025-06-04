
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
     
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success("Added to cart!");
  };
const displayTitle = product.title.length > 20 
    ? product.title.slice(0, 20) + "..." 
    : product.title;
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto mb-4"
      />
      <h2 className="text-lg font-semibold">{displayTitle}</h2>
      <p className="text-gray-600 text-sm">{product.category}</p>
      <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
