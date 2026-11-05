import { Link } from 'react-router';
import './advantagesSection.scss';
import { Advantage } from '../model/advantages.types';
import { useTranslation } from 'react-i18next';

interface AdvantagesItemProps {
  item: Advantage,
  className?: string;
}

function AdvantagesItem({
  item,
  className = ''
}: AdvantagesItemProps): React.JSX.Element {
  const advantagesItem = 'advantages-item'

  const { t } = useTranslation()

  return (
    <Link
      to={`${item.href}`}
      className={`${advantagesItem} ${className}`}
    >
      <span
        aria-hidden='true'
        className={`${advantagesItem}__icon ${item.icon}`}></span>
      <span className={`${advantagesItem}__label`}>
        {t(item.title)}
      </span>
    </Link>
  );
}

export default AdvantagesItem;