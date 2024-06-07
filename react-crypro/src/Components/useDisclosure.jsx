import { useState } from "react";

const useDisclosure = () => {
  const [isOpen, setOnOpen] = useState(false);
  const onOpen = () => {};

  const onClose = () => {};

  return { isOpen, onOpen, onClose };
};

export default useDisclosure;
