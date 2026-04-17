import type { VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode } from "react";

import type { inputVariants } from "./Input.variants";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix" | "suffix"
> {
  label?: string;
  size?: VariantProps<typeof inputVariants>["size"];
  prefix?: ReactNode;
  suffix?: ReactNode;
  error?: string;
  hasError?: boolean;
}
