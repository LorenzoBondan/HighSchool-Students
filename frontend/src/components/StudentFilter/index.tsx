import {ReactComponent as SearchIcon} from 'assets/images/search-icon.svg';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Course } from 'types/course';
import { requestBackend } from 'util/requests';
import './styles.css'

export type StudentFilterData = {
    name : string;
    course : Course | null;
}

type Props = {
    onSubmitFilter : (data: StudentFilterData) => void;
}

const StudentFilter = ( {onSubmitFilter} : Props) => {

    const { register, handleSubmit, control, setValue, getValues } = useForm<StudentFilterData>();

    const [selectCourses, setSelectCourses] = useState<Course[]>();
    
    useEffect(() => {
        requestBackend({url: '/courses', params: {page: 0, size: 50, },})
            .then(response => {
                setSelectCourses(response.data.content)
            })
    }, []);

    const onSubmit = (formData : StudentFilterData) => {
        onSubmitFilter(formData);
    };

    const handleFormClear = () => {
        setValue('name', '');
        setValue('course', null);
    }

    const handleChangeCourse = (value: Course) => {
        setValue('course', value);

        const obj : StudentFilterData = {
            name: getValues('name'), 
            course: getValues('course'), 
        };

        onSubmitFilter(obj);
    }

    return(
        <div className="base-card student-filter-container">
            <form onSubmit={handleSubmit(onSubmit)} className='student-filter-form'>
                <div className='student-filter-name-container'>
                <input 
                    {...register("name")}
                    type="text"
                    className={`form-control text-dark`}
                    placeholder="Student's name"
                    name="name"
                />
                <button className='student-filter-button-search-icon'>
                    <SearchIcon/>
                </button>
                </div>
                <div className='student-filter-bottom-container'>
                    <div className='student-filter-course-container text-secondary' style={{fontSize:"20px"}}>
                        <Controller 
                            name = 'course'
                            control = {control}
                            render = {( {field} ) => (
                            <Select 
                                {...field}
                                options={selectCourses?.sort()}
                                isClearable
                                classNamePrefix="student-filter-select"
                                placeholder="Course"
                                getOptionLabel={(course: Course) => course.name}
                                getOptionValue={(course: Course) => course.id.toString()}

                                onChange={value => handleChangeCourse(value as Course)}
                            />    
                            )}
                        />
                    </div>
                    <button onClick={handleFormClear} className='btn btn-outline-secondary btn-student-filter-clear'>
                        CLEAR <span className='btn-student-filter-word'>FILTER</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default StudentFilter;