import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl flex flex-col gap-8 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-sm flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold">AutoElite</h3>
            <p className="text-sm leading-relaxed">
              Your one-stop shop for quality products. Discover amazing deals and enjoy a seamless
              shopping experience.
            </p>
          </div>

          <div className="w-full flex-1 flex flex-col sm:flex-row md:justify-end gap-8 sm:gap-24">
            <div className="flex flex-col">
              <h3 className="text-white text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/products?category=electronics"
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=jewelery"
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    Jewelry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=men's%20clothing"
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    Men's Clothing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=women's%20clothing"
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    Women's Clothing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="shrink-0 mt-0.5" />
                  <span className="text-sm">support@autoelite.id</span>
                </li>
                <li className="text-sm leading-relaxed">
                  <p>123 Business Street</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                </li>
                <li className="text-sm">
                  <p className="mb-1">Phone: +1 (555) 123-4567</p>
                  <p>Mon-Fri: 9AM - 6PM EST</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-sm text-slate-400 text-center">
            © {currentYear} AutoElite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
