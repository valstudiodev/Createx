import Title from '@/shared/ui/Title/Title';
import './aboutSection.scss';
import { useTranslation } from 'react-i18next';
import AboutContentList from './AboutContentList';
import { ButtonBasic } from '@/shared/ui/Button';
import { routeMap } from '@/app/routes/routeMap';

interface AboutSectionContentProps {
  className?: string;
}

function AboutSectionContent({
  className = ''
}: AboutSectionContentProps): React.JSX.Element {
  const aboutSectionContent = 'about-section-content'

  const { t } = useTranslation()

  return (
    <div className={`${aboutSectionContent} ${className}`}>
      <Title
        label={t('labels.whoWeAre')}
        className={`${aboutSectionContent}__title`}
      >
        {t('titles.whyCreatex')}
      </Title>
      <AboutContentList />
      <ButtonBasic
        type='link'
        to={routeMap.about.path}
        variant='primary'
        className={`${aboutSectionContent}__btn`}
      >
        {t('buttons.moreAboutUs')}
      </ButtonBasic>
    </div>
  );
}

export default AboutSectionContent;