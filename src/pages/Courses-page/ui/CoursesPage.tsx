import { Section } from '@/shared/primitives';
import '../styles/coursesPage.scss';
// import CourseList from '@/widgets/Course/CourseList/CourseList';
// import { Reviews } from '@/widgets/Reviews';
// import SertificateSection from '@/widgets/SertificateSection/ui/SertificateSection';
// import { SubscribeSection } from '@/widgets';
import CoursesSection from '@/widgets/Course/CoursesSection/CoursesSection';
import CourseSearch from '@/features/course/course-filter/ui/CourseSearch';
import { Search } from '@/shared/ui';
import CourseCategories from '@/features/course/course-filter/ui/CourseCategories';
import CoursesFilterToolbar from '@/widgets/Courses/ui/CoursesFilterToolbar';
// import CourseGridRectangle from '@/entities/course/ui/CourseGridRectangle/CourseGridRectangle';

function CoursesPage(): React.JSX.Element {
  const coursesPage = 'courses-page'

  return (
    <Section className={`${coursesPage}`}>

      <CoursesSection />
      {/* <Reviews /> */}
      {/* <SertificateSection /> */}
      {/* <SubscribeSection /> */}
    </Section>
  );
}

export default CoursesPage;