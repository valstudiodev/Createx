import { Container, Section } from '@/shared/primitives';
import '../styles/courseDetails.scss';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchCourseById, fetchCourses } from '@/entities/course/model/courseThunk';
import { selectCourse, selectCourseError, selectCourseLoading, selectCourses, selectCoursesLoading, selectRecommendedCourses } from '@/entities/course/model/courseSelector';
import { SpinnerDefault } from '@/shared/ui';
import { ErrorMessage, WarningMessage } from '@/shared/ui/Messages';
import { CourseAboutWrap, RecommendedCourses } from '@/widgets/Course';
import { CourseDetails } from '@/entities';
import { Reviews } from '@/widgets/Reviews';
import { FormSection } from '@/widgets';

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
      <CourseAboutWrap course={course} />
      <CourseDetails course={course} />

      <Reviews />
      <FormSection type='course-registration' />
      <RecommendedCourses
        loading={coursesLoading}
        courses={recommendedCourses} />
    </Section >
  );
}

export default CourseDetailsPage;