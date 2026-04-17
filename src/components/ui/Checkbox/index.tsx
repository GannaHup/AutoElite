"use client";

import { Check } from "lucide-react";
import { forwardRef } from "react";

import { cn } from "@/utils/cn";

import { CheckboxProps } from "./Checkbox.types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, disabled, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            ref={ref}
            disabled={disabled}
            className={cn(
              "peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md",
              "checked:bg-blue-600 checked:border-blue-600",
              "transition-all duration-200 cursor-pointer",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-red-500",
              className
            )}
            {...props}
          />
          <Check
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              "w-3.5 h-3.5 text-white pointer-events-none",
              "opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
            )}
          />
        </div>
        {label && (
          <label
            htmlFor={props.id}
            className={cn(
              "text-sm font-medium text-gray-700 cursor-pointer select-none",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            {label}
          </label>
        )}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
