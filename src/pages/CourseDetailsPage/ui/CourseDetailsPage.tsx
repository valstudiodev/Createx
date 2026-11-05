import { Container, Section } from '@/shared/primitives';
import '../styles/courseDetails.scss';
import CourseDetails from '@/entities/course/ui/CourseDetails/CourseDetails';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchCourseById } from '@/entities/course/model/courseThunk';
import { selectCourse, selectCourseError, selectCourseLoading } from '@/entities/course/model/courseSelector';
import { SpinnerDefault } from '@/shared/ui';
import { ErrorMessage, WarningMessage } from '@/shared/ui/Messages';
import { CourseAboutWrap } from '@/widgets/Course';

function CourseDetailsPage(): React.JSX.Element {
  const courseDetailsPage = 'course-details-page'

  const { id } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()

  const course = useAppSelector(selectCourse)
  const loading = useAppSelector(selectCourseLoading)
  const error = useAppSelector(selectCourseError)

  useEffect(() => {
    if (!id) return

    dispatch(fetchCourseById({ courseId: id }))
  }, [dispatch, id]);

  if (loading) {
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
      <Container className={`${courseDetailsPage}__container`}>
        <CourseAboutWrap course={course} />
        <CourseDetails course={course} />
      </Container>
    </Section >
  );
}

export default CourseDetailsPage;