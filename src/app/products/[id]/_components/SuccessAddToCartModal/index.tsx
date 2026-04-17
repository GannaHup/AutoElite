import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { Product } from "@/features/products/models";
import formatter from "@/utils/formatter";

interface SuccessAddToCartModalProps {
  isOpen: boolean;
  quantity: number;
  product: Product;
  onClose: () => void;
}

const SuccessAddToCartModal: React.FC<SuccessAddToCartModalProps> = ({
  isOpen,
  quantity,
  product,
  onClose,
}) => {
  const router = useRouter();
  return (
    <Modal
      isOpen={isOpen}
      size="md"
      showCloseButton={false}
      closeOnOverlayClick={true}
      closeOnEscape={true}
      onClose={onClose}
    >
      <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl overflow-hidden">
        <div className="bg-linear-to-r from-blue-500 to-indigo-600 px-6 py-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <Sparkles className="w-16 h-16 absolute top-4 left-4 text-white" />
            <Sparkles className="w-20 h-20 absolute bottom-4 right-4 text-white" />
          </div>
          <div className="relative">
            <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 animate-bounce">
              <CheckCircle2 className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Added to Cart!</h3>
            <p className="text-blue-100 text-sm">
              {quantity} {quantity === 1 ? "item" : "items"} successfully added
            </p>
          </div>
        </div>

        {product && (
          <div className="px-6 py-6 bg-white border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-2"
                  sizes="80px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 line-clamp-2">{product.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm text-gray-500">Qty: {quantity}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm font-semibold text-green-600">
                    {formatter.currency(product.price * quantity)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="px-6 py-5 bg-white">
          <Button
            variant="primary"
            fullWidth
            onClick={() => router.push("/cart")}
            className="mb-3 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            <span className="font-semibold">View Cart</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" fullWidth onClick={onClose}>
            Continue Shopping
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessAddToCartModal;
