import { useTranslation } from 'react-i18next';
import { statisticsData } from '../model/statistics.data';
import './statistics.scss';

interface StatisticsProps {
  className?: string;
}

function Statistics({
  className = ''
}: StatisticsProps): React.JSX.Element {
  const statistics = 'statistics'

  const { t } = useTranslation()

  return (
    <div className={`${statistics} ${className}`}>
      <ul className={`${statistics}__list`}>
        {statisticsData.map((item) => (
          <li
            key={item.id}
            className={`${statistics}__item`}
          >
            <div className={`${statistics}__body`}>
              <span className={`${statistics}__value`}>
                {item.value}
              </span>
              <span className={`${statistics}__label`}>
                {t(item.label)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Statistics;