import './discountInfo.scss';
import { useTranslation } from 'react-i18next';
import DiscountTimer from '../DiscountTimer/ui/DiscountTimer';
import { DISCOUNT_CONFIG } from '../../model/discount.config';

interface DiscountInfoProps {
  className?: string;
}

function DiscountInfo({
  className = ''
}: DiscountInfoProps): React.JSX.Element {
  const discountInfo = 'discount-info'

  const { t } = useTranslation()

  return (
    <div className={`${discountInfo} ${className}`}>
      <h3 className={`${discountInfo}__title`}>
        {t('titles.earlyBirdDiscount')}
      </h3>
      <DiscountTimer
        className={`${discountInfo}__timer`}
        targetDate={DISCOUNT_CONFIG.courseStartDate} />
    </div>
  );
}

export default DiscountInfo;