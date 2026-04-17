import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  status?: number;
}

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: "https://fakestoreapi.com",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("auth_token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError<ApiResponse>) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosInstance = createAxiosInstance();
