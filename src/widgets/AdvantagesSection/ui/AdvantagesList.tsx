import { advantagesData } from '../model/advantages.data';
import AdvantagesItem from './AdvantagesItem';
import './advantagesSection.scss';

interface AdvantagesListProps {
  className?: string;
}

function AdvantagesList({
  className = ''
}: AdvantagesListProps): React.JSX.Element {
  const advantagesList = 'advantages-list'
  return (
    <ul className={`${advantagesList} ${className}`}>
      {advantagesData.map((advantage) => (
        <li
          key={advantage.id}
          className={`${advantagesList}__item`}
        >
          <AdvantagesItem item={advantage} />
        </li>
      ))}
    </ul>
  );
}

export default AdvantagesList;