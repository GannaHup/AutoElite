import { Star } from "lucide-react";
import React, { forwardRef } from "react";

import { StarRatingProps } from "./StarRating.types";
export type { StarRatingProps } from "./StarRating.types";
import { starRatingVariants } from "./StarRating.variants";

const StarRating = forwardRef<HTMLDivElement, StarRatingProps>(
  ({ rating, totalStars = 5, size = "md", readonly: _readonly, className, ...props }, ref) => {
    const starSizeStyles = {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    } as const;

    const isFilled = (index: number) => {
      return index < Math.floor(rating);
    };

    const isPartiallyFilled = (index: number) => {
      return index >= Math.floor(rating) && index < Math.ceil(rating);
    };

    return (
      <div ref={ref} className={starRatingVariants({ size, className })} {...props}>
        <div className="flex items-center">
          {[...Array(totalStars)].map((_, i) => (
            <Star
              key={i}
              className={`${starSizeStyles[size]} ${
                isFilled(i)
                  ? "text-amber-400 fill-amber-400"
                  : isPartiallyFilled(i)
                    ? "text-amber-400 fill-amber-400 opacity-50"
                    : "text-slate-200 fill-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default StarRating;
