import { Review } from '../model/review.types';
import './reviewCard.scss';
import braces from "../assets/braces.svg";

export interface ReviewCardProps {
  review: Review
  className?: string;
}

function ReviewCard({
  review,
  className = ''
}: ReviewCardProps): React.JSX.Element {
  const reviewCard = 'review-card'
  return (
    <article className={`${reviewCard} ${className}`}>
      <img
        aria-hidden='true'
        className={`${reviewCard}__icon`}
        src={braces} alt="" />
      <div className={`${reviewCard}__body`}>
        <blockquote className={`${reviewCard}__text`}>
          {review.text}
        </blockquote>
        <div className={`${reviewCard}__info`}>
          <img
            className={`${reviewCard}__avatar`}
            src={review.avatar} alt="" />
          <div className={`${reviewCard}__content`}>
            <span className={`${reviewCard}__author`}>
              {review.author}
            </span>
            <span className={`${reviewCard}__position`}>
              {review.position}
            </span>
          </div>
        </div>
      </div>

    </article>
  );
}

export default ReviewCard;