import { Review } from "types/review";
import "./styles.css";

type Props = {
  review: Review;
};

const ReviewCard = ({ review }: Props) => {
  return (

      <div className="review-details">

        <div className="reviewer-name">
          <h4>{review.user.name}</h4>
        </div>

        <div className="review-details-box">
          <h4>{review.text}</h4>
        </div>

      </div>
  );
};
export default ReviewCard;
