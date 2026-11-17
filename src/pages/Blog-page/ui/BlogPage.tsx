import { Section } from '@/shared/primitives';
import '../styles/blogPage.scss';
import BlogsSection from '@/widgets/Blog/BlogsSection/BlogsSection';
import { SubscribeSection } from '@/widgets';

function BlogPage(): React.JSX.Element {
  const blogPage = 'blog-page'

  return (
    <Section className={blogPage}>
      <BlogsSection />
      <SubscribeSection variant='newsletter' />
    </Section>
  );
}

export default BlogPage;