
import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { Role } from 'types/role';
import { User } from 'types/user';

import { requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
    userId: string;
}

const Form = () => {

    const {userId} = useParams<UrlParams>();

    const isEditing = userId !== 'create';

    const { register, handleSubmit, formState: {errors}, setValue, control } = useForm<User>();

    useEffect(() => {
        if(isEditing){
            requestBackend({url:`/users/${userId}`, withCredentials:true})
                .then((response) => {
                    const user = response.data as User;

                    setValue('name', user.name);
                    setValue('email', user.email);
                    setValue('password', user.password);
                    
                    setValue('roles', user.roles);
                })
        }
        
    }, [isEditing, userId, setValue]);

    const history = useHistory();

    const [selectRoles, setSelectRoles] = useState<Role[]>();

    //trazer os roles pra povoar o combobox
    useEffect(() => {
        requestBackend({url: '/roles', params: {page: 0, size: 50, }, withCredentials: true})
            .then(response => {
                setSelectRoles(response.data.content)
        })
    }, []);

    const onSubmit = (formData : User) => {

        const params : AxiosRequestConfig = {
            method: isEditing? "PUT" : "POST",
            url : isEditing? `/users/${userId}` : "/users",
            data: formData,
            withCredentials: true
        };

        requestBackend(params)
            .then(response => {
                console.log('Sucesso', response.data);
                history.push("/admin/users");
            })
            .catch(() => {
                toast.error('Erro ao cadastrar o User.');
            })
    };

    // botão de cancelar -> reenvia o usuário para a lista de produtos, saindo do form
    const handleCancel = () => {
        history.push("/admin/users")
    }

    return(
        <div className="students-crud-container">

            <div className="base-card students-card-form-card">
                <h1>ADD OR EDIT USER</h1>

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
                                    {...register("password", {
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="Password"
                                    name="password"
                                />
                                <div className='invalid-feedback d-block'>{errors.password?.message}</div>

                            </div>
                            
                            <div className='margin-bottom-30'>
                                
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
                        </div>

                        <div className='margin-bottom-30'>

                                <Controller 
                                    name = 'roles'
                                    rules = {{required: true}}
                                    control = {control}
                                    render = {( {field} ) => (
                                        <Select 
                                            {...field}
                                            options={selectRoles}
                                            classNamePrefix="users-crud-select"
                                            placeholder="Roles"
                                            isMulti
                                            getOptionLabel={(role: Role) => role.authority}
                                            getOptionValue={(role: Role) => role.id.toString()}
                                        />    
                                    )}
                                />
                                {errors.roles && (
                                    <div className='invalid-feedback d-block'>Campo obrigatório</div>
                                )}
                                
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