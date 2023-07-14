import './styles.css';
import { Student } from 'types/student';
import { Link } from 'react-router-dom';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';

type Props = {
  student : Student;
  onDelete : Function;
}

function StudentCrudCard( {student, onDelete} : Props ) {

  const handleDelete = (studentId : number) => {
    
    if(!window.confirm("Are you sure that you want to delete the studant?")){ 
      return;
    }

    const params : AxiosRequestConfig = {
      method:"DELETE",
      url: `/students/${studentId}`,
      withCredentials: true
    }

    requestBackend(params).then(() => {
      onDelete();
    })
  }

    return (
        <div className='base-card student-crud-card'>
            <div className='student-crud-card-top-container'>
                <img src={student.imgUrl} alt="Imagem do student" />
            </div>
            <div className='student-crud-card-bottom-container'>
              <h3>{student.nickname}</h3>
            </div>
            <div className='student-crud-card-buttons-container'>
              <button className='btn btn-outline-danger student-crud-card-button student-crud-card-button-first'
                onClick={() => handleDelete(student.id)}
                >
                  EXCLUIR
                </button>
                <Link to={`/admin/students/${student.id}`}>
                  <button className='btn btn-outline-secondary student-crud-card-button'>
                    EDITAR
                  </button>
                </Link>
            </div>
        </div>
    );
  }

  export default StudentCrudCard;