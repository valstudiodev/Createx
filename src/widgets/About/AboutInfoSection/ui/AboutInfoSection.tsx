import { Container, Section } from '@/shared/primitives';
import './aboutInfoSection.scss';
import aboutInfoImg from "../assets/img/about-info-img.jpg";
import ItemsInfoList from './ItemsInfoList';
import WatchVideoButton from './WatchWideoButton';

interface AboutInfoSectionProps {
  className?: string;
}

function AboutInfoSection({
  className = ''
}: AboutInfoSectionProps): React.JSX.Element {
  const aboutInfoSection = 'about-info-section'
  return (
    <Section className={`${aboutInfoSection} ${className}`}>
      <Container className={`${aboutInfoSection}__container`}>
        <div className={`${aboutInfoSection}__image`}>
          <WatchVideoButton />
          <img src={aboutInfoImg} alt="" />
        </div>
        <ItemsInfoList
          className={`${aboutInfoSection}__info`}
        />
      </Container>
    </Section>
  );
}

export default AboutInfoSection;