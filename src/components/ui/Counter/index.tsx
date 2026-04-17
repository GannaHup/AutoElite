import { Minus, Plus } from "lucide-react";
import React from "react";

import type { CounterProps } from "./Counter.types";
import { counterVariants } from "./Counter.variants";

export const Counter = ({
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  size = "md",
  className,
  ...props
}: CounterProps) => {
  const handleIncrement = () => {
    const newValue = value + step;
    if (max === undefined || newValue <= max) {
      onChange?.(newValue);
    }
  };

  const handleDecrement = () => {
    const newValue = value - step;
    if (newValue >= min) {
      onChange?.(newValue);
    }
  };

  const isDecrementDisabled = value <= min;
  const isIncrementDisabled = max !== undefined && value >= max;

  return (
    <div className={counterVariants({ size, className })} {...props}>
      <button
        onClick={handleDecrement}
        disabled={isDecrementDisabled}
        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <Minus className="h-4 w-4 text-slate-600" />
      </button>
      <span className="w-12 text-center font-semibold text-slate-900">{value}</span>
      <button
        disabled={isIncrementDisabled}
        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        onClick={handleIncrement}
      >
        <Plus className="h-4 w-4 text-slate-600" />
      </button>
    </div>
  );
};
