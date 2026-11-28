import { Modal } from '@/shared/ui';
import { AuthModalType } from '../model/authModal.types';
import './authModal.scss';
import LoginForm from '@/features/auth/login/ui/LoginForm/LoginForm';
import SignupForm from '@/features/auth/signup/ui/SignupForm/SignupForm';

interface AuthModalProps {
  type: AuthModalType;
  onClose: () => void;
  className?: string;
}

function AuthModal({
  className = '',
  type,
  onClose
}: AuthModalProps): React.JSX.Element | null {
  const authModal = 'auth-modal'

  if (!type) return null

  const isLogin = type === 'login'

  return (
    <Modal
      title={isLogin ? 'Sign in' : 'Sign up'}
      text={
        isLogin
          ? 'Sign in to your account using email and password provided during registration.'
          : 'Registration takes less than a minute but gives you full control over your studying.'
      }
      isOpen={Boolean(type)}
      onClose={onClose}
      className={`${authModal} ${className}`}
    >
      {isLogin
        ? <LoginForm onSuccess={onClose} />
        : <SignupForm onSuccess={onClose} />
      }

    </Modal>
  );
}

export default AuthModal;