import './advantagesSection.scss';
import advantageImage from "../assets/advantage-content-img.png";
import { advantageContent } from '../model/advantages.data';
import { useTranslation } from 'react-i18next';

interface AdvantagesContentProps {
  className?: string;
}

function AdvantagesContent({
  className = ''
}: AdvantagesContentProps): React.JSX.Element {
  const advantagesContent = 'advantages-content'

  const { t } = useTranslation()

  const content = advantageContent

  return (
    <div className={`${advantagesContent} ${className}`}>
      <div className={`${advantagesContent}__body`}>
        <h2 className={`${advantagesContent}__title`}>
          {t(content.title)}
        </h2>
        <p className={`${advantagesContent}__text`}>
          {content.text}
        </p>
      </div>
      <div className={`${advantagesContent}__image`}>
        <img src={advantageImage} alt="" />
      </div>
    </div>
  );
}

export default AdvantagesContent;