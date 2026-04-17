"use client";

import { Grid2x2, List } from "lucide-react";
import { notFound, useSearchParams } from "next/navigation";
import React, { useState } from "react";

import Breadcrumb from "@/components/ui/Breadcrumb";
import Loading from "@/components/ui/Loading";
import ProductCard from "@/components/ui/ProductCard";
import { useProducts, useProductsByCategory } from "@/features/products/hooks";

import ListCard from "./_components/ListCard";

const HomePage: React.FC = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const { data: allProducts, isLoading: isLoadingAll, isError: isErrorProducts } = useProducts();
  const { data: categoryProducts, isLoading: isLoadingCategory } = useProductsByCategory(
    category || undefined
  );

  const products = category ? categoryProducts : allProducts;
  const isLoading = category ? isLoadingCategory : isLoadingAll;

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  if (isLoading) return <Loading />;

  if (isErrorProducts) return notFound();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {category && (
          <Breadcrumb
            items={[{ label: category?.toUpperCase() || "", href: `/?category=${category}` }]}
            className="mb-6 md:mb-8"
          />
        )}

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-600 mb-1">{category?.toUpperCase()}</h1>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-gray-500">Set Display</span>
              <div
                className="border border-gray-500 rounded p-1 cursor-pointer"
                onClick={toggleViewMode}
              >
                {viewMode === "grid" ? (
                  <Grid2x2 className="w-5 h-5 text-gray-500" />
                ) : (
                  <List className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5">
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {products?.map((product) => (
                <ListCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
