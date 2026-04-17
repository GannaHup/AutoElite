import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary shadow-sm",
        secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary shadow-sm",
        accent: "bg-accent text-white hover:bg-accent/90 focus:ring-accent shadow-sm",
        outline:
          "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary bg-transparent",
        ghost:
          "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 focus:ring-gray-400 bg-transparent",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 shadow-sm",
      },
      size: {
        sm: "px-3 py-1.5 text-sm gap-1.5",
        md: "px-4 py-2 text-base gap-2",
        lg: "px-6 py-3 text-lg gap-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
