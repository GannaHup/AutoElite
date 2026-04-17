import { cva } from "class-variance-authority";

export const modalSizeVariants = cva("", {
  variants: {
    size: {
      sm: "max-w-md",
      md: "max-w-lg",
      lg: "max-w-2xl",
      xl: "max-w-4xl",
      full: "max-w-full mx-4",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
