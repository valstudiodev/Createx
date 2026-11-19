import { valuesItems } from '../data/aboutValues.data';
import './aboutValuesSection.scss';
import ValueItem from './ValueItem';

interface ValuesItemsListProps {
  className?: string;
}

function ValuesItemsList({
  className = ''
}: ValuesItemsListProps): React.JSX.Element {
  const valueItemsList = 'value-items-list'

  return (
    <ul className={`${valueItemsList} ${className}`}>
      {valuesItems.map((item) => (
        <li
          key={item.id}
          className={`${valueItemsList}__item`}
        >
          <ValueItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ValuesItemsList;