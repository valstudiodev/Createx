import { ButtonHTMLAttributes } from 'react';
import './sliderButton.scss';

type SliderButtonDirection = 'prev' | 'next'

interface SliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: SliderButtonDirection;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  icon?: string;
}

function SliderButton({
  direction,
  onClick,
  disabled,
  icon,
  className = ''
}: SliderButtonProps): React.JSX.Element {
  const sliderButton = 'slider-button'

  const combinedStyles = [
    sliderButton,
    `${sliderButton}--${direction}`,
    className,
    icon && `${sliderButton}--${icon}`
  ].filter(Boolean).join(' ')

  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      className={combinedStyles}
      aria-label={`${direction} slide`}
    >
      {icon && <span
        aria-hidden='true'
        className={`${sliderButton}__icon`}>
      </span>}
    </button>
  );
}

export default SliderButton;