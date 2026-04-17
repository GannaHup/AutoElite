import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

import type { BreadcrumbProps } from "./Breadcrumb.types";
import { breadcrumbVariants } from "./Breadcrumb.variants";

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
  homeHref = "/",
  size = "md",
  className,
}) => {
  const allItems = [{ label: "Home", href: homeHref }, ...items];

  return (
    <div className={breadcrumbVariants({ size, className })}>
      <div className="flex items-center space-x-2">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isFirst = index === 0;

          return (
            <div key={index} className="flex items-center">
              {!isFirst && (
                <span className="mx-2 text-slate-400">
                  {separator || <ChevronRight className="h-4 w-4" />}
                </span>
              )}

              {isFirst && <Home className="h-4 w-4 text-slate-400 mr-2" />}

              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={`font-medium ${isLast ? "text-slate-900" : "text-slate-600"}`}>
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
