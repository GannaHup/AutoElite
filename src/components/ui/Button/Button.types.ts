import { VariantProps } from "class-variance-authority";
import React from "react";

import { ButtonVariants, buttonVariants } from "./Button.variants";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "variant">, ButtonVariants {
  size?: VariantProps<typeof buttonVariants>["size"];
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}
