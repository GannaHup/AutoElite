import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

import { modalSizeVariants } from "./Modal.variants";

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  size?: VariantProps<typeof modalSizeVariants>["size"];
  children: ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  onClose: () => void;
}
