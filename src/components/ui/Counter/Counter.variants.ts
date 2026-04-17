import { cva, type VariantProps } from "class-variance-authority";

export const counterVariants = cva("flex items-center space-x-2", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type CounterVariants = VariantProps<typeof counterVariants>;
