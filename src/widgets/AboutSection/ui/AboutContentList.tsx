import Icon from '@/shared/ui/Icon/Icon';
import { aboutFeaturesData } from '../model/aboutSection.data';
import './aboutSection.scss'

function AboutContentList(): React.JSX.Element {
  const aboutContentList = 'about-content-list'
  return (
    <ul className={aboutContentList}>
      {aboutFeaturesData.map((item) => (
        <div className={`${aboutContentList}__wrap`}>
          <Icon
            name='icon'
            className={`${aboutContentList}__icon ${aboutContentList}__icon--icon-circle-check-big`}
          />
          <li
            key={item.id}
            className={`${aboutContentList}__item`}
          >
            <p className={`${aboutContentList}__title`}>
              {item.title}
            </p>
          </li>
        </div>
      ))}
    </ul>
  );
}

export default AboutContentList;