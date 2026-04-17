import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEvent } from "react";

import { Product } from "@/features/products/models";
import formatter from "@/utils/formatter";

import StarRating from "../StarRating";

interface ProductCardProps {
  product: Product;
  onRemoveFromWishlist?: (e: MouseEvent, productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onRemoveFromWishlist }) => {
  return (
    <Link href={`/products/${product.id}`} key={product.id} className="group">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
        {onRemoveFromWishlist && (
          <button
            onClick={(e) => onRemoveFromWishlist?.(e, product.id)}
            className="absolute top-2 right-2 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-red-50 hover:text-red-600 transition-all duration-200 opacity-0 group-hover:opacity-100 sm:opacity-100 cursor-pointer"
            aria-label="Remove from wishlist"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}

        <div className="relative aspect-square bg-blue-50">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="p-3 md:p-4">
          <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
            {product.title}
          </h3>

          <p className="text-xs text-gray-500 mb-2 capitalize">{product.category}</p>

          <div className="flex items-center gap-1.5 mb-2">
            <StarRating rating={product.rating.rate} size="sm" />
            <span className="text-xs text-gray-500">({product.rating.count})</span>
          </div>

          <p className="text-lg md:text-xl font-bold text-gray-900">
            {formatter.currency(product.price)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
