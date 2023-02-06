import './styles.css';
 
import { Student } from 'types/student';

type Props = {
  student : Student;
}

function StudentCard( {student} : Props ) {

  //const [page, setPage] = useState<Student>();

    return (
      <>
        <div className='base-card product-card'>
            <div className='card-top-container'>
                <img src={student.imgUrl} alt="Imagem do student" />
            </div>

            <div className='card-bottom-container'>
                <h3>{student.nickname}</h3>
                <h6>Name: {student.name}</h6>
                <h6>Age: {student.age}</h6>

                {student.graduated ? <h6>Graduated: true</h6> : <h6>Graduated: false</h6>}

                <h6>Courses: </h6>
                

            </div>
        </div>
        
      </>
    );
  }

  export default StudentCard;