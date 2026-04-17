import Image from "next/image";
import Link from "next/link";
import React from "react";

import StarRating from "@/components/ui/StarRating";
import { Product } from "@/features/products/models";
import formatter from "@/utils/formatter";

interface ProductCardProps {
  product: Product;
}

const ListCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group shadow-primary/10"
    >
      <div className="flex flex-row">
        <div className="h-auto relative shrink-0 w-32 sm:w-64 bg-slate-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 192px, 256px"
          />
        </div>

        <div className="flex-1 p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 min-w-0">
          <div className="flex-1 min-h-0">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wide inline-block mb-2">
              {product.category}
            </span>
            <h3 className="font-bold text-lg sm:text-xl text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
              {product.title}
            </h3>
          </div>

          <p className="text-sm text-slate-500 line-clamp-2 max-[480px]:hidden">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-1 sm:pt-2">
            <p className="text-xl sm:text-2xl font-bold text-slate-900">
              {formatter.currency(product.price)}
            </p>

            <div className="flex max-md:flex-col gap-1">
              <StarRating rating={product.rating.rate} className="flex-wrap " />
              {product.rating.count && (
                <span className="text-xs text-slate-500">
                  ({product.rating.count} {product.rating.count === 1 ? "review" : "reviews"})
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
