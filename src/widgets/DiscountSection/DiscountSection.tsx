import { Container, Section } from '@/shared/primitives';
import './discountSection.scss';
import CourseRegistrationForm from '@/features/course-registration/ui/CourseRegistrationForm/CourseRegistrationForm';
import DiscountInfo from './ui/DiscountInfo/DiscountInfo';

interface DiscountSectionProps {
  courseId: string;
  className?: string;
}

function DiscountSection({
  courseId,
  className = ''
}: DiscountSectionProps): React.JSX.Element {
  const discountSection = 'discount-section'
  return (
    <Section className={`${discountSection} ${className}`}>
      <Container className={`${discountSection}__container`}>
        <DiscountInfo />
        <CourseRegistrationForm courseId={courseId} />
      </Container>
    </Section>
  );
}

export default DiscountSection;