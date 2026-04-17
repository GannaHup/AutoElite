"use client";

import { CreditCard, Trash2 } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import { Counter } from "@/components/ui/Counter";
import useDisclosure from "@/hooks/use-disclosure";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  clearCart,
  deselectAllItems,
  removeSelectedItems,
  selectAllItems,
  toggleItemSelection,
  updateQuantity,
} from "@/store/slices/cart-slice";

import CheckoutSuccessModal from "./_components/CheckoutSuccessModal";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const showCheckoutModal = useDisclosure({ open: false });

  const cart = useAppSelector((state) => state.cart);
  const isAllSelected = cart.items.length > 0 && cart.selectedItems.length === cart.items.length;

  const handleToggleItemSelection = (id: number) => {
    dispatch(toggleItemSelection(id));
  };

  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      dispatch(deselectAllItems());
    } else {
      dispatch(selectAllItems());
    }
  };

  const handleRemoveSelected = () => {
    dispatch(removeSelectedItems());
  };

  const handleCheckout = () => {
    showCheckoutModal.onOpen();
  };

  const handleCloseModal = () => {
    dispatch(clearCart());
    showCheckoutModal.onClose();
  };

  if (cart.items.length === 0) return notFound();

  return (
    <div className="min-h-screen">
      {/* Checkout Success Modal */}
      <CheckoutSuccessModal
        isOpen={showCheckoutModal.isOpen}
        totalAmount={cart.total}
        itemCount={cart.totalItems}
        onClose={handleCloseModal}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:pb-6 md:pb-8 pt-20 md:pt-24">
        {cart.items.length > 0 && (
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 gap-4">
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  <Checkbox
                    checked={isAllSelected}
                    onChange={handleToggleSelectAll}
                    label="Select All"
                    className="shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-slate-600 truncate">
                    {cart.selectedItems.length} of {cart.items.length} selected
                  </span>
                </div>
                {cart.selectedItems.length > 0 && (
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={handleRemoveSelected}
                    className="w-full sm:w-auto text-xs sm:text-sm"
                  >
                    <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Remove Selected</span>
                    <span className="sm:hidden">Remove</span>
                  </Button>
                )}
              </div>

              {cart.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 sm:p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start gap-2 sm:gap-4">
                    <Checkbox
                      checked={cart.selectedItems.includes(item.id)}
                      onChange={() => handleToggleItemSelection(item.id)}
                      className="mt-1.5 sm:mt-1 shrink-0"
                    />
                    <div className="relative w-16 h-16 sm:w-24 sm:h-24 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-1.5 sm:p-2"
                        sizes="(max-width: 640px) 64px, 96px"
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex justify-between items-start gap-2 mb-2 sm:mb-3">
                        <div className="flex-1 min-w-0 pr-2">
                          <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-500">{item.category}</p>
                        </div>
                      </div>

                      <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                        <p className="text-sm sm:text-base font-semibold text-slate-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <Counter
                          value={item.quantity}
                          min={1}
                          size="sm"
                          onChange={(newValue) =>
                            dispatch(updateQuantity({ id: item.id, quantity: newValue }))
                          }
                          className="self-start sm:self-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 sm:p-4 md:p-6 sticky top-20 lg:top-24">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6">
                  Order Summary
                </h2>

                <div className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-3 sm:mb-4 md:mb-6">
                  <div className="flex justify-between text-xs sm:text-sm md:text-base text-slate-600">
                    <span className="truncate">Subtotal ({cart.totalItems})</span>
                    <span className="font-medium text-slate-900 shrink-0">
                      ${cart.total.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm md:text-base text-slate-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium shrink-0">Free</span>
                  </div>
                  <div className="border-t border-slate-200 pt-1.5 sm:pt-2 md:pt-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Total
                      </span>
                      <span className="text-sm sm:text-base md:text-lg font-bold text-blue-600 shrink-0">
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
                  disabled={cart.selectedItems.length === 0}
                  className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CreditCard className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2" />
                  Checkout ({cart.selectedItems.length})
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
