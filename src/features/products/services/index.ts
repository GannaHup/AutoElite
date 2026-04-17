import { axiosInstance } from "@/libs/axios";

const ProductServices = {
  getAllProduct: () => axiosInstance.get("/products").then((response) => response.data),
  getDetailProduct: (id: string) =>
    axiosInstance.get(`/products/${id}`).then((response) => response.data),
  getCategories: () => axiosInstance.get("/products/categories").then((response) => response.data),
  getProductsByCategory: (category: string) =>
    axiosInstance.get(`/products/category/${category}`).then((response) => response.data),
};

export default ProductServices;
