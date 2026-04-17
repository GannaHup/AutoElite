"use client";

import { Menu, MoveLeft, ShoppingCart, X } from "lucide-react";
import { Heart } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { useCategories } from "@/features/products/hooks";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/utils/cn";

const Navbar = () => {
  const { data: categories } = useCategories();
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const cart = useAppSelector((state) => state.cart);
  const wishlist = useAppSelector((state) => state.wishlist);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed z-50 top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200">
      {pathname === "/cart" ? (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <MoveLeft
            className="h-6 w-6 cursor-pointer text-gray-500"
            onClick={() => router.push("/")}
          />
          <h1 className="text-2xl font-bold text-slate-900">Shopping Cart</h1>
        </div>
      ) : (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <span className="text-2xl font-bold text-[#1E3A5F]">AutoElite</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {categories?.map((item) => (
                <Link
                  key={item}
                  href={`/?category=${item.toLowerCase()}`}
                  className={cn("text-gray-600 hover:text-primary transition-colors", {
                    "text-primary": params.get("category") === item.toLowerCase(),
                  })}
                >
                  {item.toUpperCase()}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="relative cursor-pointer" onClick={() => router.push("/wishlist")}>
                <Heart className="hidden md:block hover:text-red-500 transition-colors" />
                {wishlist.items.length > 0 && (
                  <div className="text-[10px] absolute -top-2.5 -right-2.5 bg-red-500 text-white px-1.5 py-0.5 flex items-center justify-center rounded-full">
                    {wishlist.items.length > 99 ? "99+" : wishlist.items.length}
                  </div>
                )}
              </div>

              <div className="relative">
                <ShoppingCart className="cursor-pointer" onClick={() => router.push("/cart")} />
                {cart.totalItems > 0 && (
                  <div className="text-[10px] absolute -top-2.5 -right-3.5 bg-primary text-white px-1 py-0.5 flex items-center justify-center rounded-full">
                    {cart.totalItems > 99 ? "99+" : cart.totalItems}
                  </div>
                )}
              </div>

              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200 mt-4 pt-4">
              <div className="flex flex-col gap-4">
                <Link
                  href="/wishlist"
                  onClick={closeMobileMenu}
                  className={cn(
                    "text-gray-600 hover:text-primary transition-colors py-2 flex items-center gap-2",
                    {
                      "text-primary font-semibold": pathname === "/wishlist",
                    }
                  )}
                >
                  <Heart className="w-4 h-4" />
                  <span>Wishlist ({wishlist.items.length})</span>
                </Link>
                {categories?.map((item) => (
                  <Link
                    key={item}
                    href={`/?category=${item.toLowerCase()}`}
                    onClick={closeMobileMenu}
                    className={cn("text-gray-600 hover:text-primary transition-colors py-2", {
                      "text-primary font-semibold": params.get("category") === item.toLowerCase(),
                    })}
                  >
                    {item.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
