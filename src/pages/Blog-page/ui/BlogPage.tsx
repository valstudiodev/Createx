import { Container, Section } from '@/shared/primitives';
import '../styles/blogPage.scss';
import PostsGrid from '@/entities/post/ui/PostGrid/PostsGrid';

function BlogPage(): React.JSX.Element {
  const blogPage = 'blog-page'

  return (
    <Section className={blogPage}>
      <Container className={`${blogPage}__container`}>
        <h1>Blog page</h1>
        <PostsGrid />
      </Container>
    </Section>
  );
}

export default BlogPage;