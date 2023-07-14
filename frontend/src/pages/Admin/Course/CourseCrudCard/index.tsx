import './styles.css';

import { Link } from 'react-router-dom';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import { Course } from 'types/course';

type Props = {
  course : Course;
  onDelete : Function;
}

function StudentCrudCard( {course, onDelete} : Props ) {

  const handleDelete = (courseId : number) => {
    
    if(!window.confirm("Are you sure that you want to delete the course?")){ // messagebox
      return;
    }

    const params : AxiosRequestConfig = {
      method:"DELETE",
      url: `/courses/${courseId}`,
      withCredentials: true
    }

    requestBackend(params).then(() => {
      onDelete();
    })
  }

    return (
        <div className='base-card student-crud-card'>
            <div className='student-crud-card-bottom-container'>
              <h3>{course.name}</h3>
            </div>
            <div className='student-crud-card-buttons-container'>
              <button className='btn btn-outline-danger student-crud-card-button student-crud-card-button-first'
                onClick={() => handleDelete(course.id)}
                >
                  DELETE
                </button>
                <Link to={`/admin/courses/${course.id}`}>
                  <button className='btn btn-outline-secondary student-crud-card-button'>
                    EDIT
                  </button>
                </Link>
            </div>
        </div>
    );
  }

  export default StudentCrudCard;