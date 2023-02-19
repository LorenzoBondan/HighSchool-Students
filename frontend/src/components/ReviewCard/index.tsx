import { AxiosRequestConfig } from "axios";
import { Review } from "types/review";
import { Student } from "types/student";
import { hasAnyRoles } from "util/auth";
import { requestBackend } from "util/requests";
import "./styles.css";

type Props = {
  review: Review;
  onDelete: Function;
};

const ReviewCard = ({ review, onDelete }: Props) => {

  const handleDelete = (reviewId : number) => {
    
    if(!window.confirm("Are you sure that you want to delete the review?")){ // messagebox
      return;
    }

    const params : AxiosRequestConfig = {
      method:"DELETE",
      url: `/reviews/${reviewId}`,
      withCredentials: true
    }

    requestBackend(params).then(() => {
      onDelete();
    })
  }


  return (

      <div className="review-details">

        <div className="reviewer-name">
          <div className="reviewer-name-text">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user-icon" />
            <h4>{review.user.name}</h4>
          </div>

          {hasAnyRoles(['ROLE_ADMIN']) && 
          <div className="review-button">
            <button className="btn btn-primary" onClick={() => handleDelete(review.id)}>DELETE</button>
          </div>
          }

        </div>

        <div className="review-details-box">
          <h4>{review.text}</h4>
        </div>

      </div>
  );
};
export default ReviewCard;
