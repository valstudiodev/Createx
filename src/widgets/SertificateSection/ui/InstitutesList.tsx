import { institutesData } from '../model/sertificateSection.data';
import './sertificateSection.scss';

function InstitutesList(): React.JSX.Element {
  const institutesList = 'institutes-list'

  return (
    <ul className={institutesList}>
      {institutesData.map((item) => (
        <li
          key={item.id}
          className={`${institutesList}__item`}
        >
          <img
            className={`${institutesList}__icon`}
            src={item.iconUrl} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default InstitutesList;