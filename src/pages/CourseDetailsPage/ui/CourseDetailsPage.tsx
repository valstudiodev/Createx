import { Section } from '@/shared/primitives';
import '../styles/courseDetails.scss';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchCourseById, fetchCourses } from '@/entities/course/model/courseThunk';
import { selectCourse, selectCourseError, selectCourseLoading, selectCourses, selectCoursesLoading, selectRecommendedCourses } from '@/entities/course/model/courseSelector';
import { SpinnerDefault } from '@/shared/ui';
import { ErrorMessage, WarningMessage } from '@/shared/ui/Messages';
import { CourseAboutWrap, RecommendedCourses } from '@/widgets/Course';
import { Reviews } from '@/widgets/Reviews';
import { FormSection } from '@/widgets';
import BenefitSection from '@/widgets/CourseDetails/BenefitSection/ui/BenefitSection';
import CourseProgram from '@/widgets/CourseDetails/LessonsSection/ui/CourseProgram';
import CourseDetailsWrap from '@/widgets/Course/CourseDetailsWrap/CourseDetailsWrap';
import CourseHero from '@/widgets/Course/CourseHero/CourseHero';

function CourseDetailsPage(): React.JSX.Element {
  const courseDetailsPage = 'course-details-page'

  const { id } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()

  const course = useAppSelector(selectCourse)
  const courses = useAppSelector(selectCourses)

  const courseLoading = useAppSelector(selectCourseLoading)
  const coursesLoading = useAppSelector(selectCoursesLoading)

  const error = useAppSelector(selectCourseError)

  const recommendedCourses = useAppSelector((state) =>
    selectRecommendedCourses(state, id ?? '')
  )

  useEffect(() => {
    if (!id) return

    dispatch(fetchCourseById({ courseId: id }))
    dispatch(fetchCourses())
  }, [dispatch, id]);

  useEffect(() => {
    if (courses.length === 0 && !coursesLoading) {
      dispatch(fetchCourses())
    }
  }, [dispatch, courses.length, coursesLoading]);

  if (courseLoading) {
    return (
      <div className={`${courseDetailsPage}__loading`}>
        <SpinnerDefault size='large' />
      </div>
    )
  }

  if (error) {
    return <ErrorMessage message='Course noy found.' />
  }

  if (!course) {
    return <WarningMessage message='Course not found.' />
  }

  return (
    <Section className={courseDetailsPage}>
      <CourseHero />
      <CourseAboutWrap course={course} />
      <CourseDetailsWrap course={course} />
      {/* learning process */}
      {/* discount */}
      <BenefitSection />
      <CourseProgram />
      <Reviews />
      <FormSection type='course-registration' />
      <RecommendedCourses
        loading={coursesLoading}
        courses={recommendedCourses} />
    </Section >
  );
}

export default CourseDetailsPage;