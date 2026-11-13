import { Container, Section } from '@/shared/primitives';
import './postsSection.scss';

interface PostsSectionProps {
  className?: string;
}

function PostsSection({
  className = ''
}: PostsSectionProps): React.JSX.Element {
  const postsSection = 'posts-section'

  return (
    <Section className={`${postsSection} ${className}`}>
      <Container className={`${postsSection}__container`}>

      </Container>
    </Section>
  );
}

export default PostsSection;  