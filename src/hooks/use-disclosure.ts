"use client";

import { useState } from "react";

export type useDisclosureProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onToggle: () => void;
};

function useDisclosure({ open = false }: { open: boolean }): useDisclosureProps {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen((prev) => !prev);

  return { isOpen, onClose, onOpen, onToggle };
}

export default useDisclosure;
