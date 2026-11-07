import { socialMediaConfig } from '@/shared/constants/socialLinks/socialLinks.types';
import { PostDetailsInterface } from '../../model/post-types';
import './postCard.scss';
import SocialIconLink from '@/shared/ui/SocialconLink/SocialIconLink';

interface ShareItemsProps {
  post: PostDetailsInterface;
  className?: string;
}

function ShareItems({
  post,
  className = ''
}: ShareItemsProps): React.JSX.Element {
  const shareItems = 'share-items'

  return (
    <div className={`${shareItems} ${className}`}>
      <span className={`${shareItems}__label`}>
        Share:
      </span>
      <ul className={`${shareItems}__list`}>
        {post.share.map((platform) => {
          const social = socialMediaConfig[platform]

          return (
            <li
              key={social.platform}
              className={`${shareItems}__item`}
            >
              <SocialIconLink
                href={social.url}
                label={social.label}
                iconClass={social.iconClass}
              />
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default ShareItems;