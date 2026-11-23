import { useTranslation } from 'react-i18next';
import './discountTimer.scss';
import useCountdown from '../model/useCountdown';
import { CountdownTime } from '../model/discountCountdown.types';

interface DiscountTimerProps {
  targetDate: string;
  className?: string;
}

function DiscountTimer({
  targetDate,
  className = ''
}: DiscountTimerProps): React.JSX.Element {
  const discountTimer = 'discount-timer'

  const { t } = useTranslation()

  const { time, status } = useCountdown(targetDate)

  const timerUnits: {
    key: keyof CountdownTime;
    label: string;
  }[] = [
      { key: 'days', label: 'days' },
      { key: 'hours', label: 'hours' },
      { key: 'minutes', label: 'minutes' },
      { key: 'seconds', label: 'seconds' },
    ];

  return (
    <div className={`${discountTimer} ${className}`}>
      {status === 'expired' ? (
        <p className={`${discountTimer}__expired`}>
          {t('discount.timer.expired')}
        </p>
      ) : (
        <div className={`${discountTimer}__list`}>
          {timerUnits.map(({ key, label }) => (
            <div
              key={key}
              className={`${discountTimer}__item`}
            >
              <span className={`${discountTimer}__value`}>
                {String(time[key]).padStart(2, '0')}
              </span>
              <span className={`${discountTimer}__label`}>
                {t(`discount.timer.${label}`)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DiscountTimer;