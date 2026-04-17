import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "placeholder:text-muted-foreground selection:bg-azul selection:text-primary-foreground dark:bg-input/30 border border-gray-300 flex w-full min-w-0 rounded-md bg-white shadow-xs transition-[color,box-shadow,ring] outline-none file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100",
  {
    variants: {
      size: {
        default: "h-9 px-3 py-1 text-base md:text-sm",
        small: "h-8 px-2.5 py-0.5 text-sm",
        large: "h-10 px-4 py-2 text-base",
      },
      hasError: {
        true: "border-red-500",
        false: "",
      },
    },
    defaultVariants: {
      size: "default",
      hasError: false,
    },
  }
);
