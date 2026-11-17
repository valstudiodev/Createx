import { Container, Section } from '@/shared/primitives';
import './teamSection.scss';
import Headline from '@/shared/ui/Headline/Headline';
import { SliderButton } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Teacher } from '@/entities/teacher/model/teacher.types';
import TeacherCard from '@/entities/teacher/ui/TeacherCard/TeacherCard';

interface TeamSectionProps {
  teachers: Teacher[];
  className?: string;
}

function TeamSectiion({
  teachers,
  className = ''
}: TeamSectionProps): React.JSX.Element {
  const teamSection = 'team-section'

  const { t } = useTranslation()

  const swiperRef = useRef<SwiperInstance | null>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState(teachers.length <= 2);

  const updateNavigation = (swiper: SwiperInstance): void => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <Section className={`${teamSection} ${className}`}>
      <Container className={`${teamSection}__container`}>
        <Headline
          label={t('labels.bestTutors')}
          title={t('titles.meetOurTeam')}
          className={`${teamSection}__headline`}
        >
          <div className={`${teamSection}__actions`}>
            <SliderButton
              disabled={isBeginning}
              onClick={() => swiperRef?.current?.slidePrev()}
              direction='prev'
              className={`${teamSection}__btn-prev ${teamSection}__btn-prev__btn-prev--icon-arrow`}
            />
            <SliderButton
              disabled={isEnd}
              onClick={() => swiperRef?.current?.slideNext()}
              direction='next'
              className={`${teamSection}__btn-next ${teamSection}__btn-next--icon-arrow`}
            />
          </div>
        </Headline>

        <div className={`${teamSection}__slider`}>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
              updateNavigation(swiper)
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 10
              },
              460: {
                slidesPerView: 1.6,
                spaceBetween: 15
              },
              620: {
                slidesPerView: 2.4,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 30
              },
              1100: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            }}
            onSlideChange={updateNavigation}
            className={`${teamSection}__swiper mySwiper`}
          >
            {teachers.map((teacher) => (
              <SwiperSlide
                key={teacher.id}
                className={`${teamSection}__slide`}
              >
                <TeacherCard teacher={teacher} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </Container>
    </Section>
  );
}

export default TeamSectiion;