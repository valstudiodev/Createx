import '../styles/homePage.scss';
import LatestPosts from '@/widgets/posts/LatestPosts/LatestPosts';
import { FeaturedCourses } from '@/widgets/Course';
import TeamSectiion from '@/widgets/TeamSection/TeamSection';
import { teachers } from '@/entities/teacher/data/teacher.data';
import { SubscribeSection } from '@/widgets';
import { HeroSection } from '@/widgets/HeroSection';
import { AboutSection } from '@/widgets/AboutSection';
import { AdvantagesSection } from '@/widgets/AdvantagesSection';
import LectureSection from '@/widgets/LecturesSection/LectureSection';
import SertificateSection from '@/widgets/SertificateSection/ui/SertificateSection';
import { Reviews } from '@/widgets/Reviews';

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
      <TeamSectiion teachers={teachers} />
      <Reviews />
      <LatestPosts />
      <SubscribeSection />
    </div>
  );
}

export default HomePage;