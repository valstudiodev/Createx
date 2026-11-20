import { Section } from '@/shared/primitives';
import '../styles/aboutPage.scss';
import AboutUsHeroSection from '@/widgets/AboutUs/AboutUsHeroSection/ui/AboutUsHeroSection';
import TeamSectionCards from '@/widgets/TeamSection/TeamSectionCards';
import { Reviews } from '@/widgets/Reviews';
import { LatestPosts } from '@/widgets/posts';
import { SubscribeSection } from '@/widgets';
import { AboutInfoSection } from '@/widgets/About';
import AboutValuesSection from '@/widgets/About/AboutValuesSection/ui/AboutValuesSection';
import AboutCompanySection from '@/widgets/About/AboutCompanySection/ui/AboutCompanySection';

function AboutPage(): React.JSX.Element {
  const aboutPage = 'about-page'

  return (
    <Section className={aboutPage}>
      <AboutUsHeroSection />
      <AboutInfoSection />
      <AboutValuesSection />
      <TeamSectionCards />
      <Reviews />
      {/* best jobs */}

      <LatestPosts />
      <SubscribeSection />

      <AboutCompanySection />
    </Section>
  );
}

export default AboutPage;