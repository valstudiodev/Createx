import { Container, Section } from '@/shared/primitives';
import './eventsRecommended.scss';
import { Event } from '@/entities/event/model/event-types';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInstance } from 'swiper';
import { WarningMessage } from '@/shared/ui/Messages';
import Headline from '@/shared/ui/Headline/Headline';
import { SliderButton } from '@/shared/ui';
import EventCardPreview from '@/entities/event/ui/EventCardPreview/EventCardPreview';
import ExploreWrap from '@/widgets/ExploreWrap/ExploreWrap';
import { ButtonBasic } from '@/shared/ui/Button';
import { routeMap } from '@/app/routes/routeMap';

interface EventsRecommendedProps {
  events: Event[];
  loading?: boolean;
  className?: string;
}

function EventsRecommended({
  events,
  loading,
  className = ''
}: EventsRecommendedProps): React.JSX.Element {
  const eventsRecommended = 'events-recommended'

  const { t } = useTranslation()

  const swiperRef = useRef<SwiperInstance | null>(null)
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState(true);

  const updateNavigation = (swiper: SwiperInstance): void => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  if (loading) {
    return (
      <div className={`${eventsRecommended}__loading`}>
        Loading recommended EVENTS...
      </div>
    )
  }

  if (events.length === 0) {
    return (
      <WarningMessage message='Recommended events not found.' />
    )
  }

  return (
    <Section className={`${eventsRecommended} ${className}`}>
      <Container className={`${eventsRecommended}__container`}>
        <Headline
          label={t('labels.checkOtherOnlineEvents')}
          title={t('titles.youMayBeInterestedIn')}
          className={`${eventsRecommended}__headline`}
        >
          <div className={`${eventsRecommended}__actions`}>
            <SliderButton
              disabled={isBeginning}
              onClick={() => swiperRef?.current?.slidePrev()}
              direction='prev'
              className={`${eventsRecommended}__btn-prev ${eventsRecommended}__btn-prev--icon-arrow`}
            />
            <SliderButton
              disabled={isEnd}
              onClick={() => swiperRef?.current?.slideNext()}
              direction='next'
              className={`${eventsRecommended}__btn-next ${eventsRecommended}__btn-next--icon-arrow`}
            />
          </div>
        </Headline>

        <div className={`${eventsRecommended}__slider`}>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
              updateNavigation(swiper)
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              420: {
                slidesPerView: 1.2,
                spaceBetween: 10
              },
              670: {
                slidesPerView: 1.6,
                spaceBetween: 15
              },
              890: {
                slidesPerView: 2.2,
                spaceBetween: 20
              },
              1050: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            onSlideChange={updateNavigation}
            className={`${eventsRecommended}__swiper mySwiper`}
          >
            {events.map((event) => (
              <SwiperSlide
                key={event.id}
                className={`${eventsRecommended}__slide`}
              >
                <EventCardPreview
                  variant='primary'
                  event={event}
                  actions={
                    <ButtonBasic
                      type='link'
                      variant='secondary'
                      to={routeMap.eventDetails.navigate(event.id)}
                      className={`${eventsRecommended}__btn`}
                    >
                      {t('buttons.viewMore')}
                    </ButtonBasic>
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <ExploreWrap
          title={t('titles.doYouWantMore')}
          actions={
            <ButtonBasic
              type='link'
              to={routeMap.events.path}
            >{t('buttons.exploreAllEvents')}
            </ButtonBasic>}
          className={`${eventsRecommended}__explore`}
        />
      </Container>
    </Section>
  );
}

export default EventsRecommended;