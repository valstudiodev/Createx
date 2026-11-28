import { ModalCloseButtonProps } from "../model/types";
import { X } from 'lucide-react';

export default function ModalCloseButton({
  onClick
}: ModalCloseButtonProps): React.JSX.Element {
  const modalCloseButton = 'modal-close-btn'
  return (
    <button
      type="button"
      onClick={onClick}
      className={modalCloseButton}
      aria-label="Close modal"
    >
      <span
        aria-hidden='true'
      >
        <X />
      </span>
    </button>
  )
}