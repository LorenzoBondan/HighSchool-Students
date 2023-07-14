import { AxiosRequestConfig } from "axios";
import ReviewCard from "components/ReviewCard";
import ReviewForm from "components/ReviewForm";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Review } from "types/review";
import { hasAnyRoles } from "util/auth";
import { requestBackend } from "util/requests";
import './styles.css';

type UrlParams = {
    studentId: string;
};

type Props = {
    studentUsername?: string | undefined;
}

const Reviews = ( {studentUsername} : Props ) => {

    const [page, setPage] = useState<Review[]>([]);
    const { studentId } = useParams<UrlParams>();

    const getReviews = useCallback(() => {
        const params: AxiosRequestConfig = {
            url: `/students/${studentId}/reviews`,
            withCredentials: false
          }
  
          requestBackend(params).then((response) => {
              setPage(response.data);
            });
    }, [studentId])

    useEffect(() => {
        getReviews();
    }, [getReviews]);
      
    const handleInsertReview = (review: Review) => {
        const clone = [...page]; 
        clone.push(review); 
        setPage(clone); 
    };
        
    return (
        <div className="page-container text-primary">
            {hasAnyRoles(["ROLE_MEMBER", "ROLE_OPERATOR"])?  ( 
                <ReviewForm studentId={studentId} onInsertReview={handleInsertReview} />
            ) 
            : (
                <div className="sign-in-review-card">
                    <Link to="/admin/auth">
                        Sign In or Sign Up to write any review
                    </Link>
                </div>
            )}
            {page.length === 0 ? <div className="reviews-main-title"><h1 style={{fontSize: "18px"}}>This student still don't have any reviews.</h1></div>
             : 
                <>
                <h1>{studentUsername}'s reviews:</h1>
                <div>
                    {page?.map((rev) => (
                    <ReviewCard key={rev.id} review={rev} onDelete={() => getReviews()} /> 
                    ))}
                </div>
                </>
            }
        </div>
      );
}

export default Reviews;