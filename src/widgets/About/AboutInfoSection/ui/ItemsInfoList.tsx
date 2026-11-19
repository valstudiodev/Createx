import { itemsInfo } from '../data/about-info.data';
import './aboutInfoSection.scss';

interface ItemsInfoListProps {
  className?: string;
}

function ItemsInfoList({
  className = ''
}: ItemsInfoListProps): React.JSX.Element {
  const itemsInfoList = 'items-info-list'
  return (
    <ul className={`${itemsInfoList} ${className}`}>
      {itemsInfo.map((item) => (
        <li
          key={item.id}
          className={`${itemsInfoList}__item`}
        >
          <div className={`${itemsInfoList}__card`}>
            <span className={`${itemsInfoList}__amount`}>
              {item.amount}
            </span>
            <span className={`${itemsInfoList}__label`}>
              {item.label}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ItemsInfoList;