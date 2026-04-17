"use client";

import { CreditCard, Trash2 } from "lucide-react";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFromCart, updateQuantity } from "@/store/slices/cart-slice";

export default function CartPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart);

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  if (cart.items.length === 0) return notFound();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:pb-6 md:pb-8 pt-20 md:pt-24">
        {cart.items.length > 0 && (
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              {cart.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 80px, 96px"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-500 mb-2">{item.category}</p>
                        </div>

                        <div
                          className="text-slate-400 hover:text-red-600 transition-colors duration-200 p-1 cursor-pointer"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                      </div>

                      <div className="flex items-center max-[420px]:flex-col max-[420px]:items-start justify-between gap-4">
                        <p className="text-base sm:text-lg font-semibold text-slate-900 shrink-0">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <Counter
                          value={item.quantity}
                          min={1}
                          size="sm"
                          onChange={(newValue) =>
                            dispatch(updateQuantity({ id: item.id, quantity: newValue }))
                          }
                          className="shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1 mt-4 lg:mt-0">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 sticky top-20 lg:top-24">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6">
                  Order Summary
                </h2>

                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex justify-between text-sm sm:text-base text-slate-600">
                    <span>Subtotal ({cart.totalItems} items)</span>
                    <span className="font-medium text-slate-900">${cart.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base text-slate-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="border-t border-slate-200 pt-2 sm:pt-3">
                    <div className="flex justify-between">
                      <span className="text-base sm:text-lg font-bold text-slate-900">Total</span>
                      <span className="text-base sm:text-lg font-bold text-blue-600">
                        ${(cart.total * 1.1).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="primary"
                  fullWidth
                  size="md"
                  onClick={handleCheckout}
                  className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base"
                >
                  <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
