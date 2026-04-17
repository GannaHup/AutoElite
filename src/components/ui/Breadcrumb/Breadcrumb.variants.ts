import { cva, type VariantProps } from "class-variance-authority";

export const breadcrumbVariants = cva("flex items-center space-x-2 text-sm", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type BreadcrumbVariants = VariantProps<typeof breadcrumbVariants>;
