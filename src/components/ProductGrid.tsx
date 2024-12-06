import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import { Filter, Product } from "../types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  filters?: Filter;
}

export function ProductGrid({ filters }: ProductGridProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => setFilteredProducts(data));
  }, []);

  useEffect(() => {
    if (!filters) return;

    let result = [...products];

    // Apply category filter
    if (filters.categories.length > 0) {
      result = result.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Apply stock filter
    if (filters.inStock) {
      result = result.filter((product) => product.stock > 0);
    }

    // Apply price filter
    result = result.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    // Apply sorting
    switch (filters.sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "popularity":
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      case "newest":
        // In a real app, you'd sort by date
        break;
    }

    setFilteredProducts(result);
  }, [filters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
}
