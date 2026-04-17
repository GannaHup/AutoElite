import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import Button from "@/components/ui/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center py-16">
        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-12 h-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any items yet</p>
        <Link href="/">
          <Button variant="primary">Start Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
