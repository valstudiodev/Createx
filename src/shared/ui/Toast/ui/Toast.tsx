import { useState } from "react";
import { ToastProps } from "../model/types";
import '../model/toastStyles.scss';

export default function Toast({ message, type = 'info', onClose }: ToastProps): React.JSX.Element | null {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  if (!isOpen) return null

  function handleClose(): void {
    setIsOpen(false)
    onClose?.()
  }

  return (
    <div className={`toast toast--${type}`} role="alert">
      <span className="toast__message">
        {message}
      </span>
      <button className="toast__close-btn" onClick={handleClose} aria-label="Close notification">
        &times;
      </button>
    </div>
  )
}