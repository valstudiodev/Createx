import { Container, Section } from '@/shared/primitives';
import './courseProgram.scss';
import courseImage from "../assets/course-programm-imag.png";
import { Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { Accordion } from '@/shared/ui/Accordion';
import { courseProgramItems } from '../data/courseProgram.data';

interface CourseProgramProps {
  className?: string;
}

function CourseProgram({
  className = ''
}: CourseProgramProps): React.JSX.Element {
  const courseProgram = 'course-program'

  const { t } = useTranslation()

  return (
    <Section className={`${courseProgram} ${className}`}>
      <Container className={`${courseProgram}__container`}>
        <div className={`${courseProgram}__content`}>
          <Title
            label={t('labels.courseProgram')}
            className={`${courseProgram}__title`}
          >
            {t('titles.whatWillYouLearn')}
          </Title>
          <Accordion
            items={courseProgramItems}
            itemLabel='Lesson'
            className={`${courseProgram}__accordion`}
          />
        </div>
        <div className={`${courseProgram}__image`}>
          <img src={courseImage} alt="" />
        </div>
      </Container>
    </Section>
  );
}

export default CourseProgram;