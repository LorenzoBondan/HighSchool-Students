import './styles.css';
import Check from 'assets/images/checked.png';
import Uncheck from 'assets/images/unchecked.png';
 
import { Student } from 'types/student';
import { Link } from 'react-router-dom';

type Props = {
  student : Student;
}

function StudentCard( {student} : Props ) {

    // Idade atual através da birthDate (time.now - birthDate)
    function ageCalc(date: string | undefined){
      var miliseconds = date? new Date().getTime() - new Date(date).getTime() : new Date().getTime();
      var years = miliseconds / (31556952000);
      return Math.trunc(years).toString();
  }

    return (
      <>
        <div className='base-card product-card'>
            <div className='card-top-container'>
                <img src={student.imgUrl} alt="Imagem do student" />
            </div>

            <div className='card-bottom-container-student-card'>
              <>
                <div className='card-title-button'>
                  <h3>{student.nickname}</h3>

                  <Link to={`/students/${student.id}`}>
                    <div className='button-zone'>
                      <button className='btn btn-primary'>Details</button>
                    </div>
                  </Link>
                  
                </div>
                
                <h6>Name: {student.name}</h6>
                <h6>Age: {ageCalc(student?.birthDate)}</h6>

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
                    {student.courses.map(course => (<h5 key={course.id}>{course.name}</h5>))}
                  </div>
                </div>
              
                </>
            </div>
        </div>
        
      </>
    );
  }

  export default StudentCard;