import { QueryClient } from "@tanstack/react-query";

const createQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 10, // 10 minutes
        retry: 1,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
      mutations: {
        gcTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
      },
    },
  });
};

export const queryClient = createQueryClient();
