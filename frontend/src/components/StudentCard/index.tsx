import './styles.css';
import Check from 'assets/images/checked.png';
import Uncheck from 'assets/images/unchecked.png';
 
import { Student } from 'types/student';

type Props = {
  student : Student;
}

function StudentCard( {student} : Props ) {

    return (
      <>
        <div className='base-card product-card'>
            <div className='card-top-container'>
                <img src={student.imgUrl} alt="Imagem do student" />
            </div>

            <div className='card-bottom-container'>
              <>
                <div className='card-title-button'>
                  <h3>{student.nickname}</h3>
                  <div className='button-zone'>
                      <button className='btn btn-primary'>Details</button>
                  </div>
                </div>
                
                
                <h6>Name: {student.name}</h6>
                <h6>Age: {student.age}</h6>

                <div className='graduated-zone'>
                  {student.graduated ? (
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
                    {student.courses.map(course => (<h5>{course.name}</h5>))}
                  </div>
                </div>
                

                

                </>
            </div>
        </div>
        
      </>
    );
  }

  export default StudentCard;