import { Section } from '@/shared/primitives';
import '../styles/blogPage.scss';
import BlogsSection from '@/widgets/Blog/BlogsSection/BlogsSection';
import { SubscribeSection } from '@/widgets';
import { useState } from 'react';

function BlogPage(): React.JSX.Element {
  const blogPage = 'blog-page'

  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <Section className={blogPage}>
      <BlogsSection
        currentPage={currentPage}
        onChagePage={setCurrentPage}
        itemsPerPage={6}
      />
      <SubscribeSection variant='newsletter' />
    </Section>
  );
}

export default BlogPage;