import React from "react";

import { ButtonProps } from "./Button.types";
export type { ButtonProps } from "./Button.types";
import { cn } from "@/utils/cn";

import { buttonVariants } from "./Button.variants";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const iconSizeStyles = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    } as const;

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(buttonVariants({ variant, size }), fullWidth && "w-full", className)}
        {...props}
      >
        {isLoading && (
          <svg
            className={cn("animate-spin", iconSizeStyles[size as keyof typeof iconSizeStyles])}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && (
          <span className={cn("mr-2", iconSizeStyles[size as keyof typeof iconSizeStyles])}>
            {leftIcon}
          </span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span className={cn("ml-2", iconSizeStyles[size as keyof typeof iconSizeStyles])}>
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

export default Button;
