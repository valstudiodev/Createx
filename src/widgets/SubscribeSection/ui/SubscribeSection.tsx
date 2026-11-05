import { Container, Section } from "@/shared/primitives";
import './subscribeSection.scss';
import { SubscribeVariant } from "@/shared/ui/Subscribe/model/subscribe.types";
import DefaultSubscribe from "@/shared/ui/Subscribe/ui/DefaultSubscribe/DefaultSubscribe";
import NewsletterSubscribe from "@/shared/ui/Subscribe/ui/NewsletterSubscribe/NewsletterSubscribe";
import CompactSubscribe from "@/shared/ui/Subscribe/ui/CompactSubscribe/CompactSubscribe";

interface SubscribeSectionProps {
  variant?: SubscribeVariant;
  className?: string;
}

function SubscribeSection({
  variant = 'default',
  className = ''
}: SubscribeSectionProps): React.JSX.Element {
  const subscribeSection = 'subscribe-section'

  const variants: Record<SubscribeVariant, React.ReactNode> = {
    default: <DefaultSubscribe />,
    newsletter: <NewsletterSubscribe />,
    compact: <CompactSubscribe />
  }

  const stylesMixed = [
    subscribeSection,
    `${subscribeSection}--${variant}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <Section className={stylesMixed}>
      <div className={`${subscribeSection}__inner`}>
        <Container className={`${subscribeSection}__container`}>
          {variants[variant]}
        </Container>
      </div>
    </Section>
  );
}

export default SubscribeSection;