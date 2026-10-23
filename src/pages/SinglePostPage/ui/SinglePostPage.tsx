import { Container, Section } from '@/shared/primitives';
import '../styles/singlePost.scss';

function SinglePostPage(): React.JSX.Element {
  const singlePostPage = 'single-post-page'
  return (
    <Section className={singlePostPage}>
      <Container className={`${singlePostPage}__container`}>
        <h1>Single post page</h1>
      </Container>
    </Section>
  );
}

export default SinglePostPage;