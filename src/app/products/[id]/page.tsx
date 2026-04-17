"use client";

import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import React, { useMemo, useState } from "react";

import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import Loading from "@/components/ui/Loading";
import ProductCard from "@/components/ui/ProductCard";
import StarRating from "@/components/ui/StarRating";
import { useProduct, useProductsByCategory } from "@/features/products/hooks";
import useDisclosure from "@/hooks/use-disclosure";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/slices/cart-slice";
import { addToWishlist, removeFromWishlist } from "@/store/slices/wishlist-slice";
import formatter from "@/utils/formatter";

import SuccessAddToCartModal from "./_components/SuccessAddToCartModal";

const ProductDetailPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const [quantity, setQuantity] = useState(0);
  const showSuccessModal = useDisclosure({ open: false });
  const { data: product, isLoading, error } = useProduct(String(params.id || ""));
  const { data: categoryProducts } = useProductsByCategory(product?.category);
  const { items: wishlistItems } = useAppSelector((state) => state.wishlist);

  const recommendations = useMemo(() => {
    if (!categoryProducts || !product) return [];
    return categoryProducts.filter((p) => p.id !== product.id).slice(0, 4);
  }, [categoryProducts, product]);

  const isInWishlist = useMemo(() => {
    if (!product) return false;
    return wishlistItems.some((item) => item.id === product.id);
  }, [wishlistItems, product]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
      showSuccessModal.onOpen();
    }
  };

  const handleCloseModal = () => {
    showSuccessModal.onClose();
  };

  const handleToggleWishlist = () => {
    if (!product) return;

    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  if (isLoading) return <Loading />;

  if (error || !product) return notFound();

  return (
    <div className="min-h-screen">
      <SuccessAddToCartModal
        isOpen={showSuccessModal.isOpen}
        quantity={quantity}
        product={product}
        onClose={handleCloseModal}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 mt-16 max-md:mt-20">
        <Breadcrumb
          items={[
            { label: product.category.toUpperCase(), href: `/?category=${product.category}` },
            { label: product.title, current: true },
          ]}
          className="mb-6 md:mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative bg-gray-50 h-64 sm:h-80 md:h-96 lg:h-auto lg:min-h-125">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-6 md:p-8"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="break-all line-clamp-2 text-3xl max-md:text-2xl max-sm:text-xl font-bold text-slate-900 leading-tight">
              {product.title}
            </h1>

            <span className="text-xs w-max font-semibold text-primary max-[480px]:text-[10px] bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
              {product.category}
            </span>

            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <StarRating rating={product.rating.rate} />
              <span className="text-sm text-slate-500">({product.rating.count} reviews)</span>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                {formatter.currency(product.price)}
              </span>

              <div className="flex flex-col gap-1 mt-2">
                <h2 className="text-base md:text-lg font-semibold text-slate-900">Description</h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="my-4">
                <Counter
                  value={quantity}
                  min={0}
                  size="md"
                  onChange={(newValue) => setQuantity(newValue)}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="primary"
                disabled={quantity === 0}
                className="w-full flex items-center gap-2 justify-center"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2 justify-center"
                onClick={handleToggleWishlist}
              >
                <Heart size={20} className={isInWishlist ? "fill-red-500 text-red-500" : ""} />
                <span>Add to Wishlist</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-b border-y-gray-300 my-8 md:my-10" />

        {recommendations.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {recommendations.map((recommendation) => (
                <ProductCard key={recommendation.id} product={recommendation} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductDetailPage;
