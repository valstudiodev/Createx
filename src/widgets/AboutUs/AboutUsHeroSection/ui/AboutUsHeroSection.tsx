import { Container, Section } from '@/shared/primitives';
import './aboutUsHeroSection.scss';
import { Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { ButtonBasic } from '@/shared/ui/Button';
import aboutUsImageHero from "../assets/aboutUs-hero-img.png";
import { routeMap } from '@/app/routes/routeMap';

interface AboutUsHeroSectionProps {
  className?: string;
}

function AboutUsHeroSection({
  className = ''
}: AboutUsHeroSectionProps): React.JSX.Element {
  const aboutUsHeroSection = 'about-us-hero-section'

  const { t } = useTranslation()

  return (
    <Section className={`${aboutUsHeroSection} ${className}`}>
      <Container className={`${aboutUsHeroSection}__container`}>
        <div className={`${aboutUsHeroSection}__body`}>
          <Title
            label={t('labels.aboutUs')}
            className={`${aboutUsHeroSection}__title`}
          >
            {t('titles.createxOnlineSchool')}
          </Title>
          <div className={`${aboutUsHeroSection}__content`}>
            <p>{t('aboutUs.description')}</p>
            <p>{t('aboutUs.text')}</p>
          </div>
          <div className={`${aboutUsHeroSection}__actions`}>
            <ButtonBasic
              variant='secondary'
              type='link'
              to={routeMap.events.path}
              className={`${aboutUsHeroSection}__btn`}
            >
              {t('buttons.exploreEvents')}
            </ButtonBasic>
            <ButtonBasic
              type='link'
              to={routeMap.courses.path}
              className={`${aboutUsHeroSection}__btn`}
            >
              {t('buttons.browseCourses')}
            </ButtonBasic>
          </div>
        </div>
        <div className={`${aboutUsHeroSection}__image`}>
          <img src={aboutUsImageHero} alt="" />
        </div>
      </Container>
    </Section>
  );
}

export default AboutUsHeroSection;