import { cva, type VariantProps } from "class-variance-authority";

const starRatingVariants = cva("flex items-center gap-2", {
  variants: {
    size: {
      sm: "gap-0.5",
      md: "gap-1",
      lg: "gap-1.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export { starRatingVariants };

export type StarRatingVariants = VariantProps<typeof starRatingVariants>;
