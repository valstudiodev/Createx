import { Container, Section } from '@/shared/primitives';
import './singlePostRecommended.scss';
import PostCard from '@/entities/post/ui/PostCard/PostCard';
import { useTranslation } from 'react-i18next';
import { Post } from '@/entities/post/model/post-types';
import { useRef, useState } from 'react';
import { Swiper as SwiperInstance } from 'swiper';
import { ErrorMessage, WarningMessage } from '@/shared/ui/Messages';
import Headline from '@/shared/ui/Headline/Headline';
import { SliderButton, SpinnerDefault } from '@/shared/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '@/app/store/hooks';
import { selectPostError, selectPostLoading } from '@/entities/post/model/postSelector';
import ExploreWrap from '@/widgets/ExploreWrap/ExploreWrap';
import { ButtonBasic } from '@/shared/ui/Button';

interface SinglePostRecommendedProps {
  posts: Post[];
  loading?: boolean;
  className?: string;
}

function SinglePostRecommended({
  posts,
  loading,
  className = ''
}: SinglePostRecommendedProps): React.JSX.Element {
  const singlePostRecommended = 'single-post-recommended'

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
      <div className={`${singlePostRecommended}__loading`}>
        <SpinnerDefault size='medium' />
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <WarningMessage message='There are not recommended posts.' />
    )
  }

  return (
    <Section className={`${singlePostRecommended} ${className}`}>
      <Container className={`${singlePostRecommended}__container`}>
        <Headline
          label={t('labels.ourBlog')}
          title={t('titles.youMayAlsoLike')}
          className={`${singlePostRecommended}__headline`}
        >
          <div className={`${singlePostRecommended}__actions`}>
            <SliderButton
              disabled={isBeginning}
              onClick={() => swiperRef?.current?.slidePrev()}
              direction='prev'
              className={`${singlePostRecommended}__btn-prev ${singlePostRecommended}__btn-prev--icon-arrow`}
            />
            <SliderButton
              disabled={isEnd}
              onClick={() => swiperRef?.current?.slideNext()}
              direction='next'
              className={`${singlePostRecommended}__btn-next ${singlePostRecommended}__btn-next--icon-arrow`}
            />
          </div>
        </Headline>

        <div className={`${singlePostRecommended}__slider`}>
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
            className={`${singlePostRecommended}__swiper mySwiper`}
          >
            {posts.map((post) => (
              <SwiperSlide
                key={post.id}
                className={`${singlePostRecommended}__slide`}
              >
                <PostCard post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <ExploreWrap
          title={t('titles.doYouWantMoreContent')}
          actions={<ButtonBasic>{t('buttons.goToBlock')}</ButtonBasic>}
          className={`${singlePostRecommended}__explore`}
        />

      </Container>
    </Section>
  );
}

export default SinglePostRecommended;