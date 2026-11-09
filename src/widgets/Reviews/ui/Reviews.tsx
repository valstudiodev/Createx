import { Container, Section } from '@/shared/primitives';
import './reviews.scss';
import Title from '@/shared/ui/Title/Title';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperInstance } from 'swiper'
import { reviewsData } from '@/entities/review/data/review.data';
import ReviewCard from '@/entities/review/ui/ReviewCard';
import { useRef, useState } from 'react';
import { SliderButton } from '@/shared/ui';

interface ReviewsProps {
  className?: string;
}

function Reviews({
  className = ''
}: ReviewsProps): React.JSX.Element {
  const reviews = 'reviews'

  const { t } = useTranslation()

  const swiperRef = useRef<SwiperInstance | null>(null)

  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState(reviewsData.length <= 1);
  const paginationRef = useRef<HTMLDivElement>(null);

  const updateNavigation = (swiper: SwiperInstance): void => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <Section className={`${reviews} ${className}`}>
      <Container className={`${reviews}__container`}>
        <Title
          label={t('labels.testimonials')}
          className={`${reviews}__title`}
          variant='centered'
        >
          {t('titles.whatOurStudentsSay')}
        </Title>
        <div className={`${reviews}__body`}>
          <SliderButton
            disabled={isBeginning}
            onClick={() => swiperRef?.current?.slidePrev()}
            direction='prev'
            className={`${reviews}__btn-prev ${reviews}__btn-prev--icon-arrow`}
          />
          <div className={`${reviews}__slider`}>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              pagination={{
                clickable: true,
                dynamicBullets: false,
                type: 'bullets',
                el: `.${reviews}__pagination`
              }}
              modules={[Pagination]}
              slidesPerView={1}
              onSlideChange={updateNavigation}
              spaceBetween={20}
              onReachBeginning={() => setIsBeginning(true)}
              onReachEnd={() => setIsEnd(true)}
              className={`${reviews}__swiper mySwiper`}
            >
              {reviewsData.map((review) =>
                <SwiperSlide
                  key={review.id}
                  className={`${reviews}__swiper`}
                >
                  <ReviewCard
                    className={`${reviews}__slide`}
                    review={review} />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
          <SliderButton
            disabled={isEnd}
            onClick={() => swiperRef?.current?.slideNext()}
            direction='next'
            className={`${reviews}__btn-next ${reviews}__btn-next--icon-arrow`}
          />
        </div>
        <div
          ref={paginationRef}
          className={`${reviews}__pagination`} />
      </Container>
    </Section>
  );
}

export default Reviews;