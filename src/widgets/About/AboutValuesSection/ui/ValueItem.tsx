import { ValueItemSingle } from '../model/aboutValuesSection.types';
import './aboutValuesSection.scss';

interface ValueItemProps {
  item: ValueItemSingle;
  className?: string;
}

function ValueItem({
  item,
  className = ''
}: ValueItemProps): React.JSX.Element {
  const valueItem = 'value-item'

  const Icon = item.icon

  return (
    <article className={`${valueItem} ${className}`}>
      <div className={`${valueItem}__icon`}>
        <Icon />
      </div>
      <div className={`${valueItem}__content`}>
        <h4 className={`${valueItem}__title`}>
          {item.title}
        </h4>
        <p className={`${valueItem}__text`}>
          {item.text}
        </p>
      </div>
    </article>
  );
}

export default ValueItem;