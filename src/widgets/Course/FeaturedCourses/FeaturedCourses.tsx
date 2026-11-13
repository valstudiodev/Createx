import { Container, Section } from '@/shared/primitives';
import './featuredCourses.scss';
import Headline from '@/shared/ui/Headline/Headline';
import { ButtonBasic } from '@/shared/ui/Button';
import { routeMap } from '@/app/routes/routeMap';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectCourses, selectCoursesError, selectCoursesLoading, selectFeaturedCourses } from '@/entities/course/model/courseSelector';
import { CourseCardPreview } from '@/entities';
import { useEffect } from 'react';
import { fetchCourses } from '@/entities/course/model/courseThunk';
import { WarningMessage } from '@/shared/ui/Messages';
import { useTranslation } from 'react-i18next';
import { SpinnerDefault } from '@/shared/ui';

interface FeaturedCoursesProps {
  className?: string
}

function FeaturedCourses({
  className = ''
}: FeaturedCoursesProps): React.JSX.Element {
  const clFeaturedCourses = 'featured-courses'

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const courses = useAppSelector(selectCourses)
  const featuredCourses = useAppSelector(selectFeaturedCourses)
  const isLoading = useAppSelector(selectCoursesLoading)
  const error = useAppSelector(selectCoursesError)

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchCourses())
    }
  }, [dispatch, courses.length]);

  if (isLoading) {
    return (
      <div className={`${clFeaturedCourses}__loading`}>
        <SpinnerDefault size='large' />
      </div>
    )
  }

  if (error) {
    return (
      <div>
        {error}
      </div>
    )
  }

  if (!isLoading && !error && featuredCourses.length === 0) {
    return (
      <WarningMessage message='No featured courses available.' />
    )
  }

  return (
    <Section className={`${clFeaturedCourses} ${className}`}>
      <Container className={`${clFeaturedCourses}__container`}>
        <Headline
          title={t('titles.featuredCourses')}
          label={t('labels.readyToLearn')}
          className={`${clFeaturedCourses}__headline`}
        >
          <ButtonBasic
            type='link'
            to={routeMap.courses.path}
            variant='secondary'
            className={`${clFeaturedCourses}__btn`}
          >
            {t('buttons.viewAllCourses')}
          </ButtonBasic>
        </Headline>
        <ul className={`${clFeaturedCourses}__list`}>
          {featuredCourses.map((course) => (
            <li
              key={course.id}
              className={`${clFeaturedCourses}__item`}
            >
              <CourseCardPreview course={course} />
            </li>
          ))}
        </ul>

      </Container>
    </Section>
  );
}

export default FeaturedCourses;