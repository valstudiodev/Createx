import { AboutSection } from '@/widgets/AboutSection';
import '../styles/homePage.scss';
import HeroSection from '@/widgets/HeroSection/ui/HeroSection';
import { AdvantagesSection } from '@/widgets/AdvantagesSection';

function HomePage(): React.JSX.Element {
  const homePage = 'home-page'

  return (
    <div className={homePage}>
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
    </div>
  );
}

export default HomePage;