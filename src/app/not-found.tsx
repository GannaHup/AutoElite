"use client";

import { PackageSearch } from "lucide-react";
import Link from "next/link";

import Button from "@/components/ui/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center py-16">
        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <PackageSearch className="w-12 h-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
        <p className="text-gray-500 mb-8 max-w-120">
          We're having trouble loading the home page right now. Please check your internet
          connection and give it another shot.
        </p>
        <Link href="/">
          <Button variant="primary">Try Again</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
