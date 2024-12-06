import React, { useState } from "react";
import { HeroSlider } from "../components/home/HeroSlider";
import { ProductGrid } from "../components/ProductGrid";
import { ProductFilters } from "../components/products/ProductFilters";

export default function Home() {
  const [filters, setFilters] = useState({
    categories: [],
    inStock: false,
    priceRange: [0, 1000],
    sortBy: "newest",
  });
  return (
    <div>
      <main className="flex-1">
        <HeroSlider />

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-8">
            <aside className="w-64 hidden lg:block">
              <ProductFilters onFilterChange={setFilters} />
            </aside>

            <div className="flex-1">
              <ProductGrid filters={filters} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
