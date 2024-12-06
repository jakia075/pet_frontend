import { AnimatePresence, motion } from "framer-motion";
import { LogOut, Menu, Search, ShoppingBag, User2, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";
import { useCartStore } from "../../store/useCartStore";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { items, setIsOpen } = useCartStore();
  const user = sessionStorage.getItem("user");
  const navigate = useNavigate();
  const handleCartClick = () => {
    if (user) {
      setIsOpen(true);
    } else {
      navigate("/signin");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <h1
              className="text-2xl font-bold cursor-pointer"
              onClick={() => navigate("/")}
            >
              Pet Store
            </h1>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden lg:flex space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {category.name}
              </button>
            ))}
          </nav> */}

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2"
              aria-label="Search"
            >
              <Search className="w-6 h-6" />
            </button>
            <button
              onClick={() => {
                handleCartClick();
              }}
              className="p-2 relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {items.length}
                </span>
              )}
            </button>
            {user ? (
              <div className="flex items-center gap-2">
                <User2 className="w-6 h-6" />
                <span className="text-sm">{"Admin"}</span>
                <button
                  onClick={() => {
                    sessionStorage.removeItem("user");
                    navigate("/signin");
                  }}
                >
                  <LogOut className="w-6 h-6" />
                </button>
              </div>
            ) : (
              <Link to="/signin">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute inset-y-0 left-0 w-64 bg-white">
              <div className="p-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4"
                >
                  <X className="w-6 h-6" />
                </button>
                <nav className="mt-8">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      {category.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-0 bg-white p-4 shadow-lg"
          >
            <div className="max-w-3xl mx-auto flex items-center">
              <input
                type="search"
                placeholder="Search products..."
                className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <button onClick={() => setIsSearchOpen(false)} className="ml-4">
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
