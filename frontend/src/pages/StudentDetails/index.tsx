import {ReactComponent as ArrowIcon} from 'assets/images/Seta.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Student } from 'types/student';
import { BASE_URL } from 'util/requests';
import Check from 'assets/images/checked.png';
import Uncheck from 'assets/images/unchecked.png';
import './styles.css';

type UrlParams = {
    studentId: string;
}

function StudentDetails(){
    
    const { studentId } = useParams<UrlParams>();

    const [student, setStudent] = useState<Student>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
        .get(`${BASE_URL}/students/${studentId}`)
        .then((response) => {
            setStudent(response.data);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [studentId]);

    return(
        <>
        <div className='student-details-container'>

            <div className='base-card student-details-card'>

                <Link to="/students">
                    <div className='goback-container'>
                        <ArrowIcon />
                        <h6>VOLTAR</h6>
                    </div>
                </Link>
                
                <div className='row'>
                    <div className='col-xl-6'>
                        <div className='student-details-img-container'>
                            <img src={student?.imgUrl} alt={student?.nickname} />
                        </div>

                        <div className='card-bottom-container'>
                        <>
                            <div className='card-title-button'>
                                <h3>{student?.nickname}</h3>
                            </div>
                
                
                            <h6>Name: {student?.name}</h6>
                            <h6>Age: {student?.age}</h6>

                            <div className='graduated-zone'>
                                {student?.graduated ? (
                                <>
                                    <h6>Graduated:</h6>
                                    <img src={Check} width="18" height="18" alt="checked" />
                                </>
                                ) : (
                                <>
                                    <h6>Graduated:</h6>
                                    <img src={Uncheck} width="18" height="18" alt="unchecked" />
                                </>
                                )}
                            </div>
                

                            <div className='courses-zone'>
                                <h6>Courses: </h6>
                                <div className='courses-list-zone'>
                                    {student?.courses.map(course => (<h5>{course.name}</h5>))}
                                </div>
                            </div>

                        </>
                    </div>
                </div>

                <div className='col-xl-6'>
                    <div className='description-container'>
                        <h2>Student's description</h2>
                        <p>123456</p>
                    </div>
                </div>
                    
            </div>

            </div>
        </div>
        </>
    );
}

export default StudentDetails;