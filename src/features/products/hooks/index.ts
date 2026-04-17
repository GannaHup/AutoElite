import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { Product } from "../models";
import ProductServices from "../services";

export const useProducts = (options?: UseQueryOptions<Product[], Error>) =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () => ProductServices.getAllProduct(),
    ...options,
  });

export const useProduct = (id: string, options?: UseQueryOptions<Product, Error>) =>
  useQuery({
    queryKey: ["product", id],
    queryFn: async () => ProductServices.getDetailProduct(id),
    ...options,
  });

export const useCategories = (options?: UseQueryOptions<string[], Error>) =>
  useQuery({
    queryKey: ["categories"],
    queryFn: async () => ProductServices.getCategories(),
    ...options,
  });

export const useProductsByCategory = (
  category?: string,
  options?: UseQueryOptions<Product[], Error>
) =>
  useQuery({
    queryKey: ["products", "category", category],
    queryFn: async () => ProductServices.getProductsByCategory(category || ""),
    enabled: !!category,
    ...options,
  });
