import { useTranslation } from 'react-i18next';
import './aboutInfoSection.scss';

interface WatchVideoButtonProps {
  className?: string;
}

function WatchVideoButton({
  className = ''
}: WatchVideoButtonProps): React.JSX.Element {
  const watchVideoButton = 'watch-video-button'

  const { t } = useTranslation()

  return (
    <button
      type='button'
      className={`${watchVideoButton} ${className}`}>
      <span
        aria-hidden='true'
        className={`${watchVideoButton}__icon ${watchVideoButton}__icon--icon-circle-play`}></span>
      <span className={`${watchVideoButton}__label`}>
        {t('buttons.watchVideo')}
      </span>
    </button>
  );
}

export default WatchVideoButton;