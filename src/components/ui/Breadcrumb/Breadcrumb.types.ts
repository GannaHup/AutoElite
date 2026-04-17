import { VariantProps } from "class-variance-authority";
import React from "react";

import { breadcrumbVariants } from "./Breadcrumb.variants";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbProps {
  size?: VariantProps<typeof breadcrumbVariants>["size"];
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  homeHref?: string;
  className?: string;
}
