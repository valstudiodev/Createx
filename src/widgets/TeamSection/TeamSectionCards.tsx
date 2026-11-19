import { Container, Section } from '@/shared/primitives';
import './teamSection.scss';
import { Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import TeacherList from '@/entities/teacher/ui/TeacherList/TeacherList';
import { teachers } from '@/entities/teacher/data/teacher.data';

interface TeamSectionCardsProps {
  className?: string;
}

function TeamSectionCards({
  className = ''
}: TeamSectionCardsProps): React.JSX.Element {
  const teamSectionCards = 'team-section-cards'

  const { t } = useTranslation()

  const visibleTeachers = teachers.slice(0, 8)


  return (
    <Section className={`${teamSectionCards} ${className}`}>
      <Container className={`${teamSectionCards}__container`}>
        <Title
          label={t('labels.bestTutors')}
          variant='centered'
          className={`${teamSectionCards}__title`}
        >
          {t('titles.meetOurTeam')}
        </Title>
        <TeacherList teachers={visibleTeachers} />
      </Container>
    </Section>
  );
}

export default TeamSectionCards;