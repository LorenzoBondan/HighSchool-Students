import { AxiosRequestConfig } from "axios";
import ReviewCard from "components/ReviewCard";
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

            {page.length===0 ? <h1 style={{fontSize: "18px"}}>This user still don't have any reviews.</h1>
             : 
            <>
                <h1>{studentUsername}'s reviews:</h1>

                {//hasAnyRoles(["ROLE_OPERATOR"]) && ( // form de inserir avaliação SOMENTE PARA MEMBROS
                //<ReviewForm movieId={studentId} onInsertReview={handleInsertReview} />
                //)}
                }

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