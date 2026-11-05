import Title from '@/shared/ui/Title/Title';
import './compactSubscribe.scss';
import Subscribe from '../Subscribe/Subscribe';
import compactImage from "../../assets/compact-img.png";

function CompactSubscribe(): React.JSX.Element {
  const compactSubscribe = 'compact-subscribe'

  return (
    <div className={compactSubscribe}>
      <div className={`${compactSubscribe}__image`}>
        <img
          src={compactImage}
          alt=""
          aria-hidden='true'
        />
      </div>
      <div className={`${compactSubscribe}__body`}>
        <Title
          variant='left'
          className={`${compactSubscribe}__title`}
        >
          Don’t want to miss the best events?
          Subscribe to our newsletter!
        </Title>
        <Subscribe
          variant='newsletter'
          className={`${compactSubscribe}__subscribe`} />
      </div>
    </div>
  );
}

export default CompactSubscribe;