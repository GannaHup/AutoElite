import { PackageSearch } from "lucide-react";
import Link from "next/link";

import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center py-16">
        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <PackageSearch className="w-12 h-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
        <p className="text-gray-600 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/">
          <Button variant="primary">Browse All Products</Button>
        </Link>
      </div>
    </div>
  );
}
