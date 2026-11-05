import { Container, Section } from '@/shared/primitives';
import './heroSection.scss';
import ButtonPlay from '@/shared/ui/Button/ButtonPlay/ButtonPlay';
import Title from '@/shared/ui/Title/Title';
import { ButtonBasic } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { routeMap } from '@/app/routes/routeMap';
import heroImage from "../assets/hero-img.png";
import { Statistics } from '@/widgets/Statistics';

function HeroSection(): React.JSX.Element {
  const heroSection = 'hero-section'

  const { t } = useTranslation()

  return (
    <Section className={heroSection}>
      <Container className={`${heroSection}__container`}>
        <div className={`${heroSection}__body`}>
          <div className={`${heroSection}__content`}>
            <ButtonPlay className={`${heroSection}__btn`} />
            <Title
              as='h1'
              className={`${heroSection}__title`}
            >
              {t('titles.enjoyStudying')}
            </Title>
            <div className={`${heroSection}__actions`}>
              <ButtonBasic
                type='link'
                className={`${heroSection}__actions-btn`}
                to={routeMap.about.path}
                variant='secondary'>
                {t('buttons.aboutUs')}
              </ButtonBasic>
              <ButtonBasic
                type='link'
                className={`${heroSection}__actions-btn`}
                to={routeMap.courses.path}
                variant='primary'>
                {t('buttons.exploreCourses')}
              </ButtonBasic>
            </div>
          </div>
          <div className={`${heroSection}__image`}>
            <img
              aria-hidden='true'
              src={heroImage} alt="" />
          </div>
        </div>
        <Statistics />
      </Container>
    </Section>
  );
}

export default HeroSection;