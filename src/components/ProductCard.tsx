import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useCartStore } from "../store/useCartStore";
import { Product } from "../types";
import { ProductDetails } from "./products/ProductDetails";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
    toast.success("Added to cart!");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          {product.featured && (
            <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
              Featured
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 mt-1 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              ({product.reviews})
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold">${product.price}</span>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>

      {showDetails && (
        <ProductDetails
          product={product}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
}
