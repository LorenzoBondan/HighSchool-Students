import { AxiosRequestConfig } from "axios";
import ReviewCard from "components/ReviewCard";
import ReviewForm from "components/ReviewForm";
/*import ReviewCard from "components/ReviewCard";
import ReviewForm from "components/ReviewForm";*/
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Review } from "types/review";
import { Student } from "types/student";
import { hasAnyRoles } from "util/auth";
import { requestBackend } from "util/requests";

import './styles.css';

type UrlParams = {
    studentId: string;
};

type Props = {
    studentUsername?: string | undefined;
}

  //reviews
const Reviews = ( {studentUsername} : Props ) => {

    const [page, setPage] = useState<Review[]>([]); //recebe a lista de reviews obtida na requisição.
    const { studentId } = useParams<UrlParams>();


    useEffect(() => {
        const params: AxiosRequestConfig = {
          url: `/students/${studentId}/reviews`,
          withCredentials: true,
          params: {
            page: 0,
            size: 30,
          },
        };

        requestBackend(params).then((response) => {
            setPage(response.data);
            console.log(response.data);
          });

    }, [studentId]);
      
    const handleInsertReview = (review: Review) => {
        const clone = [...page]; // copia o conteúdo que já tem
        clone.push(review); // insere o novo conteúdo naquele copiado
        setPage(clone); // define o conteúdo copiado
    };

        
    return (
        <div className="page-container text-primary">

            {hasAnyRoles(["ROLE_OPERATOR"]) && ( // form de inserir avaliação SOMENTE PARA MEMBROS
                <ReviewForm studentId={studentId} onInsertReview={handleInsertReview} />
            )}

            {page.length===0 ? <div className="reviews-main-title"><h1 style={{fontSize: "18px"}}>This student still don't have any reviews.</h1></div>
             : 
                <>
                <h1>{studentUsername}'s reviews:</h1>

                <div>
                    {page?.map((rev) => (
                    <ReviewCard key={rev.id} review={rev} /> //uso a lista de reviews para renderizar card a card.
                    ))}
                </div>
                </>
            }
        </div>
      );
}

export default Reviews;