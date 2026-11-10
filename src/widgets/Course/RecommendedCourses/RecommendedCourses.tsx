import { Container, Section } from '@/shared/primitives';
import './recommendedCourses.scss';
import { CourseFullDetails } from '@/entities/course/model/course.types';
import { CourseCardPreview } from '@/entities';
import { WarningMessage } from '@/shared/ui/Messages';
import { SliderButton, SpinnerDefault } from '@/shared/ui';
import { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Headline from '@/shared/ui/Headline/Headline';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import ExploreWrap from '@/widgets/ExploreWrap/ExploreWrap';
import { ButtonBasic } from '@/shared/ui/Button';
import { routeMap } from '@/app/routes/routeMap';

interface RecommendedCoursesProps {
  courses: CourseFullDetails[];
  loading: boolean;
  className?: string;
}

function RecommendedCourses({
  courses,
  loading,
  className = ''
}: RecommendedCoursesProps): React.JSX.Element {
  const recommendedCourses = 'recommended-courses'

  const { t } = useTranslation()

  const swiperRef = useRef<SwiperInstance | null>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState(courses.length <= 2);

  const updateNavigation = (swiper: SwiperInstance): void => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  if (loading) {
    return (
      <div className={`${recommendedCourses}__loading`}>
        <SpinnerDefault size='large' />
      </div>
    )
  }

  if (courses.length === 0) {
    return (
      <WarningMessage message='There is not recommended courses.' />
    )
  }

  return (
    <Section className={`${recommendedCourses} ${className}`}>
      <Container className={`${recommendedCourses}__container`}>
        <Headline
          label={t('labels.checkOtherCourses')}
          title={t('titles.youMayAlsoLike')}
          className={`${recommendedCourses}__headline`}
        >
          <div className={`${recommendedCourses}__actions`}>
            <SliderButton
              disabled={isBeginning}
              onClick={() => swiperRef?.current?.slidePrev()}
              direction='prev'
              className={`${recommendedCourses}__btn-prev ${recommendedCourses}__btn-prev--icon-arrow`}
            />
            <SliderButton
              disabled={isEnd}
              onClick={() => swiperRef?.current?.slideNext()}
              direction='next'
              className={`${recommendedCourses}__btn-next ${recommendedCourses}__btn-next--icon-arrow`}
            />
          </div>
        </Headline>

        <div className={`${recommendedCourses}__slider`}>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
              updateNavigation(swiper)
            }}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15
              },
              580: {
                slidesPerView: 1.2,
                spaceBetween: 15
              },
              860: {
                slidesPerView: 1.4,
                spaceBetween: 20
              },
              1100: {
                slidesPerView: 2,
                spaceBetween: 30
              }
            }}
            onSlideChange={updateNavigation}
            className={`${recommendedCourses}__swiper mySwiper`}
          >
            {courses.map((course) => (
              <SwiperSlide
                key={course.id}
                className={`${recommendedCourses}__slide`}
              >
                <CourseCardPreview course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <ExploreWrap
          className={`${recommendedCourses}__explore`}
          title={t('titles.doYouWantMoreCourses')}
          actions={
            <ButtonBasic
              type='link'
              to={routeMap.courses.path}
              className={`${recommendedCourses}__btn`}
            >
              {t('buttons.viewAllCourses')}
            </ButtonBasic>
          }
        />
      </Container>
    </Section>
  );
}

export default RecommendedCourses;