import { useTranslation } from 'react-i18next';
import './AboutStudyingProcess';
import { aboutStudyingProcessData } from '../data/aboutStudyingProcess.data';

interface StudyingProcessListProps {
  className?: string;
}

function StudyingProcessList({
  className = ''
}: StudyingProcessListProps) {
  const studyingProcessList = 'studying-process-list'
  const studyingProcessItem = 'studying-process-item'

  const { t } = useTranslation()

  return (
    <ul className={`${studyingProcessList} ${className}`}>
      {aboutStudyingProcessData.map((item, index) => (
        <li
          key={item.id}
          className={`${studyingProcessList}__item`}
        >
          <div className={studyingProcessItem}>
            <div className={`${studyingProcessItem}__body`}>
              <span className={`${studyingProcessItem}__label`}>
                {`${t(item.label)} ${index + 1}`}
              </span>
              <h4 className={`${studyingProcessItem}__title`}>
                {t(item.title)}
              </h4>
              <p className={`${studyingProcessItem}__text`}>
                {t(item.text)}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default StudyingProcessList;