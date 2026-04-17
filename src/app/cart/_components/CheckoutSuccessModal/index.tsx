"use client";

import { Check, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import Button from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import formatter from "@/utils/formatter";

interface CheckoutSuccessModalProps {
  isOpen: boolean;
  totalAmount: number;
  itemCount: number;
  onClose: () => void;
}

const CheckoutSuccessModal: React.FC<CheckoutSuccessModalProps> = ({
  isOpen,
  totalAmount,
  itemCount,
  onClose,
}) => {
  const router = useRouter();
  const handleBackToHome = () => {
    onClose();
    setTimeout(() => router.push("/"), 0);
  };

  const handleContinueShopping = () => {
    onClose();
    setTimeout(() => router.push("/products/1"), 0);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      showCloseButton={false}
      closeOnOverlayClick={false}
      closeOnEscape={false}
    >
      <div className="bg-white rounded-2xl overflow-hidden">
        <div className="bg-linear-to-r from-green-500 to-emerald-600 p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10 flex flex-col items-center gap-2 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center animate-bounce">
              <Check className="w-8 h-8 text-green-500" strokeWidth={3} />
            </div>
            <h2 className="text-2xl font-bold">Checkout Successful!</h2>
            <p className="text-white/90">Thank you for your order</p>
          </div>
        </div>

        <div className="p-6 flex flex-col gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-blue-900 mb-1">Check Your Email</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                We have sent you an email with payment instructions and order details.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 bg-gray-50 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900">Order Summary</h3>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Total Items</span>
                <span className="font-medium text-gray-900">
                  {itemCount} product{itemCount !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">{formatter.currency(totalAmount)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (10%)</span>
                <span className="font-medium text-gray-900">
                  {formatter.currency(totalAmount * 0.1)}
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-blue-600">
                  {formatter.currency(totalAmount * 1.1)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button variant="primary" fullWidth onClick={handleBackToHome}>
              Back to Home
            </Button>
            <Button variant="outline" fullWidth onClick={handleContinueShopping}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CheckoutSuccessModal;
