import { AboutSection } from '@/widgets/AboutSection';
import '../styles/homePage.scss';
import HeroSection from '@/widgets/HeroSection/ui/HeroSection';
import { AdvantagesSection } from '@/widgets/AdvantagesSection';
import LectureSection from '@/widgets/LecturesSection/LectureSection';
import SertificateSection from '@/widgets/SertificateSection/ui/SertificateSection';
import { Reviews } from '@/widgets/Reviews';
import LatestPosts from '@/widgets/posts/LatestPosts/LatestPosts';
import { FeaturedCourses } from '@/widgets/Course';
import { SubscribeSection } from '@/widgets';

function HomePage(): React.JSX.Element {
  const homePage = 'home-page'



  return (
    <div className={homePage}>
      <HeroSection />
      <AboutSection />
      <FeaturedCourses />
      <AdvantagesSection />
      <LectureSection />
      <SertificateSection />
      <LatestPosts />
      <Reviews />
      <SubscribeSection />
    </div>
  );
}

export default HomePage;