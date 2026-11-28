export interface ModalProps {
  title: string;
  isOpen: boolean;
  className: string;
  onClose: () => void;
  children: React.ReactNode;
  text?: string;
}

export interface ModalCloseButtonProps {
  onClick: () => void;
}

export interface ModalHeaderProps {
  title: string;
  text?: string;
}

export interface ModalContentProps {
  children: React.ReactNode
}