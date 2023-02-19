import { AxiosRequestConfig } from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Review } from "types/review";
import { requestBackend } from "util/requests";
import './styles.css';

type FormData = {
    text: string;
    studentId: number;
}

type Props = {
    studentId: string;
    onInsertReview: (review: Review) => void;
}

const ReviewForm = ( {studentId, onInsertReview}: Props ) => {
    
    const { register, handleSubmit, setValue} = useForm<FormData>();

    // evento de enviar formulário
    const onSubmit = (formData : FormData) => {
        formData.studentId = parseInt(studentId);

        const config: AxiosRequestConfig = {
            method: "POST",
            url: "/reviews",
            data: formData,
            withCredentials: true,
        };

        requestBackend(config)
            .then((response) => {
                setValue("text", "");
                onInsertReview(response.data);
                toast.success("Review added!");
            })
            .catch((error) => {
                console.log("Error", error);
            })
    };

    
    return(
        <div className="review-submit-card">

            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    {...register("text", {
                    required: "Required field,",
                    })}
                    id="input-review"
                    type="text"
                    placeholder="Insert your review here"
                    name="text"
                />
                <div style={{display: "flex", justifyContent: "center"}}>

                    <button>Save Review</button>
        
                </div>
            </form>
        </div>
    );
}

export default ReviewForm;