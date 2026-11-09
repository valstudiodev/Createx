import { AboutSection } from '@/widgets/AboutSection';
import '../styles/homePage.scss';
import HeroSection from '@/widgets/HeroSection/ui/HeroSection';
import { AdvantagesSection } from '@/widgets/AdvantagesSection';
import LectureSection from '@/widgets/LecturesSection/LectureSection';
import SertificateSection from '@/widgets/SertificateSection/ui/SertificateSection';
import { Reviews } from '@/widgets/Reviews';
import LatestPosts from '@/widgets/posts/LatestPosts/LatestPosts';

function HomePage(): React.JSX.Element {
  const homePage = 'home-page'



  return (
    <div className={homePage}>
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <LectureSection />
      <SertificateSection />


      <LatestPosts />
      <Reviews />
    </div>
  );
}

export default HomePage;