import { useTranslation } from 'react-i18next';
import { learningProcessData } from '../data/learningProcess.data';
import line from "../assets/line.svg";
import './learningProcess.scss';

interface LearningProcessListProps {
  className?: string;
}

function LearningProcessList({
  className = ''
}: LearningProcessListProps) {
  const learningProcessList = 'learning-process-list'
  const learningProcessItem = 'learning-process-item'

  const { t } = useTranslation()

  return (
    <ul className={`${learningProcessList} ${className}`}>
      {learningProcessData.map((item) => (
        <li
          key={item.id}
          className={`${learningProcessList}__item`}
        >
          <div className={`${learningProcessItem}`}>
            <div className={`${learningProcessItem}__top`}>
              <span className={`${learningProcessItem}__number`}>
                {item.number}
              </span>
              <img
                aria-hidden='true'
                src={line} alt="" />
            </div>

            <div className={`${learningProcessItem}__content`}>
              <h4 className={`${learningProcessItem}__title`}>
                {t(item.title)}
              </h4>
              <p className={`${learningProcessItem}__text`}>
                {t(item.text)}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default LearningProcessList;