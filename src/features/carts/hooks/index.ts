import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { CartWithDetails } from "../models";
import CartServices from "../services";

export const useCart = (options?: UseQueryOptions<CartWithDetails, Error>) =>
  useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const cartData = await CartServices.getAll();
      const items = cartData[0]?.products || [];
      const total = items.reduce(
        (sum: number, item: any) => sum + (item.price || 0) * item.quantity,
        0
      );
      const totalItems = items.reduce((sum: number, item: any) => sum + item.quantity, 0);

      return {
        items: cartData[0]?.products || [],
        total,
        totalItems,
      };
    },
    ...options,
  });
