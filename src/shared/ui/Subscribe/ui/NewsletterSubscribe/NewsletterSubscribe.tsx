import Title from '@/shared/ui/Title/Title';
import Subscribe from '../Subscribe/Subscribe';
import './newsletterSubscribe.scss';
import newsletterImage from "@/shared/ui/Subscribe/assets/newsletter-img.png";

function NewsletterSubscribe(): React.JSX.Element {
  const newsletterSubscribe = 'newsletter-subscribe'
  return (
    <div className={newsletterSubscribe}>
      <div className={`${newsletterSubscribe}__image`}>
        <img
          src={newsletterImage}
          alt=""
          aria-hidden='true'
        />
      </div>
      <div className={`${newsletterSubscribe}__body`}>
        <Title
          variant='left'
          className={`${newsletterSubscribe}__title`}
        >
          Want to get the best articles weekly?
          Subscribe to our newsletter!
        </Title>
        <Subscribe
          variant='newsletter'
          className={`${newsletterSubscribe}__subscribe`} />
      </div>
    </div>
  );
}

export default NewsletterSubscribe;