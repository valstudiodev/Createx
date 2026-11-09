import { Review } from "../model/review.types";
import avatar01 from "../assets/avatar-img-01.jpg";

export const reviewsData: Review[] = [
  {
    id: 'review-01',
    author: 'Eleanor Pena',
    position: 'Position, Company',
    avatar: avatar01,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.'
  },
  {
    id: 'review-02',
    author: 'Robert Fox',
    position: 'Position, Company',
    avatar: '/images/reviews/robert.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];