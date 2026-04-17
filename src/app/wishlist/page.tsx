"use client";

import { notFound } from "next/navigation";
import React, { MouseEvent, useState } from "react";

import ProductCard from "@/components/ui/ProductCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFromWishlist } from "@/store/slices/wishlist-slice";

const WishlistPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: wishlistItems } = useAppSelector((state) => state.wishlist);
  const [removedItems, setRemovedItems] = useState<Set<number>>(new Set());

  const handleRemoveFromWishlist = (e: MouseEvent, productId: number) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFromWishlist(productId));
    setRemovedItems(new Set(removedItems).add(productId));
  };

  if (wishlistItems.length === 0) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 lg:py-10 mt-16 max-md:mt-20">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Wishlist</h1>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""} saved
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {wishlistItems.map((product) => {
            if (removedItems.has(product.id)) return null;

            return (
              <ProductCard
                key={product.id}
                product={product}
                onRemoveFromWishlist={(e, id) => handleRemoveFromWishlist(e, id)}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default WishlistPage;
