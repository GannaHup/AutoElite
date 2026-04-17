import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

import { counterVariants } from "./Counter.variants";

export interface CounterProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  size?: VariantProps<typeof counterVariants>["size"];
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
}
