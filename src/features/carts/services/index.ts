import { axiosInstance } from "@/libs/axios";

const CartServices = {
  getAll: () => axiosInstance.get("/carts").then((res) => res.data),
};

export default CartServices;
