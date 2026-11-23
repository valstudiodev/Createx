import { Title } from '@/shared/ui';
import './aboutStydyingProcess.scss';
import StudyingProcessList from './StudyingProcessList';
import { useTranslation } from 'react-i18next';

interface AboutStudyingProcessContentProps {
  className?: string;
}

function AboutStudyingProcessContent({
  className = ''
}: AboutStudyingProcessContentProps) {
  const aboutStudyingProcessContent = 'about-studying-process-content'

  const { t } = useTranslation()

  return (
    <div className={`${aboutStudyingProcessContent} ${className}`}>
      <Title
        label={t('labels.studyingProcess')}
        className={`${aboutStudyingProcessContent}__title`}
      >
        {t('titles.howWeDoIt')}
      </Title>
      <StudyingProcessList />
    </div>
  );
}

export default AboutStudyingProcessContent;