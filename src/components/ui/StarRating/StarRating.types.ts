import { HTMLAttributes } from "react";

export interface StarRatingProps extends HTMLAttributes<HTMLDivElement> {
  rating: number;
  totalStars?: number;
  size?: "sm" | "md" | "lg";
  readonly?: boolean;
}
