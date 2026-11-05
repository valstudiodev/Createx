import Title from '@/shared/ui/Title/Title';
import './defaultSubscribe.scss';
import Subscribe from '../Subscribe/Subscribe';

function DefaultSubscribe(): React.JSX.Element {
  const defaultSubscribe = 'default-subscribe'
  return (
    <div className={`${defaultSubscribe}`}>
      <Title
        variant='centered'
        label="Don’t miss anything"
        className={`${defaultSubscribe}__title`}
      >
        Subscribe to the Createx School announcements
      </Title>
      <Subscribe
        variant='default'
        className={`${defaultSubscribe}__subscribe`} />
    </div>
  );
}

export default DefaultSubscribe;