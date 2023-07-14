
import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Course } from 'types/course';
import { requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
    courseId: string;
}

const Form = () => {

    const {courseId} = useParams<UrlParams>();

    const isEditing = courseId !== 'create';

    const { register, handleSubmit, formState: {errors}, setValue } = useForm<Course>();

    useEffect(() => {
        if(isEditing){
            requestBackend({url:`/courses/${courseId}`})
                .then((response) => {
                    const course = response.data as Course;

                    setValue('name', course.name);
                    setValue('area', course.area);
                })
        }
        
    }, [isEditing, courseId, setValue]);

    const history = useHistory();

    const onSubmit = (formData : Course) => {

        const params : AxiosRequestConfig = {
            method: isEditing? "PUT" : "POST",
            url : isEditing? `/courses/${courseId}` : "/courses",
            data: formData,
            withCredentials: true
        };

        requestBackend(params)
            .then(response => {
                console.log('Sucesso', response.data);
                history.push("/admin/courses");
            })
            .catch(() => {
                toast.error('Erro ao cadastrar o Course.');
            })
    };

    const handleCancel = () => {
        history.push("/admin/courses")
    }

    return(
        <div className="students-crud-container">
            <div className="base-card students-card-form-card">
                <h1>ADD OR EDIT COURSE</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row students-crud-inputs-container'>
                        <div className='col-lg-6 students-crud-inputs-left-container'>
                            <div className='margin-bottom-30'>
                                <input 
                                    {...register("name", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Name"
                                    name="name"
                                />
                                <div className='invalid-feedback d-block'>{errors.name?.message}</div>
                            </div>
                            <div className='margin-bottom-30'>
                                <input 
                                    {...register("area", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.area ? 'is-invalid' : ''}`}
                                    placeholder="Area"
                                    name="area"
                                />
                                <div className='invalid-feedback d-block'>{errors.area?.message}</div>
                            </div>
                        </div>
                        <div className='students-crud-buttons-container'>
                            <button 
                                className='btn btn-outline-danger students-crud-buttons'
                                onClick={handleCancel}
                                >
                                CANCELAR
                            </button>
                            <button className='btn btn-primary text-white students-crud-buttons'>SALVAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;