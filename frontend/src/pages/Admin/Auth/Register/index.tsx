
import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { User } from 'types/user';
import { requestBackend } from 'util/requests';
import partyPhoto from 'assets/images/party.png';
import './styles.css';
import { useState } from 'react';

const RegisterForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<User>();

    const history = useHistory();

    const onSubmit = (formData : User) => {
        
        formData.roles = [ {id:3, authority:"ROLE_MEMBER"} ];

        const params : AxiosRequestConfig = {
            method: "POST",
            url : "/users",
            data: formData,
            withCredentials: false
        };

        requestBackend(params)
            .then(response => {
                console.log('Sucesso', response.data);
                history.push("/admin/auth/login");
                toast.success("User registered!");
            })
            .catch((error) => {
                toast.error('Error');
                if (error.response && error.response.status === 422) {
                    setAlertMessage('This email is already in use!');
                } else {
                    setAlertMessage('An error occurred while processing the request.');
                }
            })
    };

    const handleCancel = () => {
        history.push("/")
    }

    const [alertMessage, setAlertMessage] = useState('');

    return(
        <div className="students-crud-container">
            <div className="base-card students-card-form-card">
                <h1>REGISTER</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row students-crud-inputs-container'>
                        <div className='col-lg-6 students-crud-inputs-left-container'>
                            <div className='margin-bottom-30'>
                                <label htmlFor="" style={{color:"black"}}>Name</label>
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
                                <label htmlFor="" style={{color:"black"}}>Email</label>
                                <input 
                                    {...register("email", {
                                    pattern: { 
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Insira um Email válido'
                                        }
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="Email"
                                    name="email"
                                />
                                <div className='invalid-feedback d-block'>{errors.email?.message}</div>
                            </div>
                            <div className='margin-bottom-30'>
                                <label htmlFor="" style={{color:"black"}}>Password</label>
                                <input 
                                    {...register("password", {
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="Password"
                                    name="password"
                                />
                                <div className='invalid-feedback d-block'>{errors.password?.message}</div>
                            </div>
                            {alertMessage && <p className="error-message margin-bottom-30">{alertMessage}</p>}
                        </div>
                        <div className='col-lg-6 students-crud-inputs-rigth-container'>
                            <img src={partyPhoto} alt="" />
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

export default RegisterForm;