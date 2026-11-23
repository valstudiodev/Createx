import { Container, Section } from '@/shared/primitives';
import './learningProcess.scss';
import { Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import LearningProcessList from './LearningProcessList';

interface LearningProcessProps {
  className?: string;
}

function LearningProcess({
  className = ''
}: LearningProcessProps) {
  const learningProcess = 'learning-process'

  const { t } = useTranslation()

  return (
    <Section className={`${learningProcess} ${className}`}>
      <Container className={`${learningProcess}__container`}>
        <Title
          label={t('labels.mainSteps')}
          variant='centered'
          className={`${learningProcess}__title`}
        >
          {t('titles.onlineLearningProcess')}
        </Title>
        <LearningProcessList />
      </Container>
    </Section>
  );
}

export default LearningProcess;