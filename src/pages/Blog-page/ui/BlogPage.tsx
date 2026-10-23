import { Container, Section } from '@/shared/primitives';
import '../styles/blogPage.scss';
import { Link } from 'react-router';
import { routeMap } from '@/app/routes/routeMap';

function BlogPage(): React.JSX.Element {
  const blogPage = 'blog-page'
  const singlePostId = 15

  return (
    <Section className={blogPage}>
      <Container className={`${blogPage}__container`}>
        <h1>Blog page</h1>
        <Link to={routeMap.singlePost.navigate(singlePostId)}>
          Go to single post
        </Link>
      </Container>
    </Section>
  );
}

export default BlogPage;