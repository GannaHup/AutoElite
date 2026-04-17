import type React from "react";

import { cn } from "@/utils/cn";

import type { InputProps } from "./Input.types";
import { inputVariants } from "./Input.variants";

const Input: React.FC<InputProps> = ({
  className,
  size,
  type,
  label,
  prefix,
  suffix,
  error,
  hasError,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="font-medium">{label}</label>}

      <div className="relative flex items-center">
        {prefix && (
          <div className="absolute left-3 flex items-center text-muted-foreground">{prefix}</div>
        )}

        <input
          type={type}
          data-slot="input"
          className={cn(
            inputVariants({ size, hasError }),
            prefix && "pl-10",
            suffix && "pr-10",
            className
          )}
          {...props}
        />

        {suffix && (
          <div className="absolute right-3 flex items-center text-muted-foreground">{suffix}</div>
        )}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export { Input };
