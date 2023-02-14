import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';

import { requestBackend } from 'util/requests';
import { toast } from 'react-toastify';

import './styles.css';
import { Student } from 'types/student';
import { Course } from 'types/course';

type UrlParams = {
    studentId: string;
}

const Form = () => {

    const { studentId } = useParams<UrlParams>();
    
    const isEditing = studentId !== 'create';

    const { register, handleSubmit, formState: {errors}, setValue, control } = useForm<Student>();

    //trazer os cursos pra povoar o combobox
    useEffect(() => {
        requestBackend({url: '/courses'})
            .then(response => {
                setSelectCourses(response.data.content)
            })
    }, []);

    //carregar as textboxes com os valores do estudante a ser editado
    useEffect(() => {
        if (isEditing) {
            requestBackend({url:`/students/${studentId}`})
                .then((response) => {

                    const student = response.data as Student;

                    setValue('name', student.name);
                    setValue('nickname', student.nickname);
                    setValue('birthDate', student.birthDate);

                    setValue('graduated', student.graduated);
                    setValue('description', student.description);
                    setValue('imgUrl', student.imgUrl);
                    setValue('location', student.location);
                    setValue('courses', student.courses);

                    setValue('contact.phone', student.contact.phone);
                    setValue('contact.facebook', student.contact.facebook);
                    setValue('contact.instagram', student.contact.instagram);

                })
        }
    }, [isEditing, studentId, setValue]);

    const history = useHistory();

    const [selectCourses, setSelectCourses] = useState<Course[]>();

    const onSubmit = (formData : Student) => {

        // data: formData
        const params : AxiosRequestConfig = {
            method: isEditing? "PUT" : "POST",
            url: isEditing? `/students/${studentId}` : "/students",
            data: formData,
            withCredentials: true
          };

        requestBackend(params)
        .then(response => {
            console.log('SUCESSO', response.data);
            history.push("/admin/students");

            /*toast.success('Student cadastrado com sucesso!');*/
        })
        .catch(() => {
            toast.error('Erro ao cadastrar o Student.');
        })
        ;
    };

    // botão de cancelar -> reenvia o usuário para a lista de produtos, saindo do form
    const handleCancel = () => {
        history.push("/admin/students")
    }

    
    return(
        <div className="students-crud-container">

            <div className="base-card students-card-form-card">
                <h1>ADD OR EDIT STUDENT</h1>

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
                                    {...register("nickname", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.nickname ? 'is-invalid' : ''}`}
                                    placeholder="Nickname"
                                    name="nickname"
                                />
                                <div className='invalid-feedback d-block'>{errors.nickname?.message}</div>

                            </div>





                            <div className='margin-bottom-30 checkbox-graduated text-dark'> 
                                <input 
                                    type="checkbox"
                                    placeholder='Graduated'
                                    {...register("graduated", {})}
                                    className='mx-3 checkbox-graduated text-dark'
                                    name="graduated"
                                    value='true'
                            
                                 /> Graduated

                            </div>


                            <div className='margin-bottom-30'>

                                <Controller 
                                    name = 'courses'
                                    rules = {{required: true}}
                                    control = {control}
                                    render = {( {field} ) => (
                                        <Select 
                                            {...field}
                                            options={selectCourses}
                                            classNamePrefix="students-crud-select"
                                            placeholder="Courses"
                                            isMulti
                                            getOptionLabel={(course: Course) => course.name}
                                            getOptionValue={(course: Course) => course.id.toString()}
                                        />    
                                    )}
                                />
                                {errors.courses && (
                                    <div className='invalid-feedback d-block'>Campo obrigatório</div>
                                )}
                                
                            </div>

                            <div className='margin-bottom-30'>
                                
                                <input 
                                    {...register("birthDate", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.birthDate ? 'is-invalid' : ''}`}
                                    placeholder="BirthDate"
                                    name="birthDate"
                                />
                                <div className='invalid-feedback d-block'>{errors.birthDate?.message}</div>


                            </div>

                            <div className='margin-bottom-30'>
                                
                                <input 
                                    {...register("location", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.location ? 'is-invalid' : ''}`}
                                    placeholder="Location"
                                    name="location"
                                />
                                <div className='invalid-feedback d-block'>{errors.location?.message}</div>

                            </div>


                            <div className='margin-bottom-30'>
                                
                                <input 
                                    {...register("imgUrl", {
                                    required: 'Campo obrigatório',
                                    pattern: { 
                                        value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm,
                                        message: 'Insira uma URL válida'
                                    }
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.imgUrl ? 'is-invalid' : ''}`}
                                    placeholder="URL of Student's image"
                                    name="imgUrl"
                                />
                                <div className='invalid-feedback d-block'>{errors.imgUrl?.message}</div>

                            </div>

                        </div>

                        <div className='col-lg-6'>
                            <div>
                                <textarea 
                                    rows={5} 
                                    {...register("description", {
                                    required: 'Campo obrigatório',
                                    })}
                                    className={`form-control base-input ${errors.description ? 'is-invalid' : ''} h-auto`}
                                    placeholder="Descrição"
                                    name="description"
                                />
                                <div className='invalid-feedback d-block'>{errors.description?.message}</div>
                            </div>

                            <div className='margin-bottom-30'>
                                
                                <input 
                                    {...register("contact.phone", {
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.contact?.phone ? 'is-invalid' : ''}`}
                                    placeholder="Phone number"
                                    name="contact.phone"
                                />

                            </div>

                            <div className='margin-bottom-30'>
                                
                                <input 
                                    {...register("contact.instagram", {
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.contact?.instagram ? 'is-invalid' : ''}`}
                                    placeholder="Instagram URL"
                                    name="contact.instagram"
                                />

                            </div>

                            <div className='margin-bottom-30'>
                                
                                <input 
                                    {...register("contact.facebook", {
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.contact?.facebook ? 'is-invalid' : ''}`}
                                    placeholder="Facebook URL"
                                    name="contact.facebook"
                                />

                            </div>
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
                </form>
            </div>
            
        </div>
    );
}

export default Form;