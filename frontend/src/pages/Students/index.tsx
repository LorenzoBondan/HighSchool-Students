
import { AxiosRequestConfig } from 'axios';
import StudentCard from 'components/StudentCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Student } from 'types/student';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import CardLoader from './CardLoader';
import './styles.css';

function Students(){

    const [page, setPage] = useState<SpringPage<Student>>();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
    
        const params : AxiosRequestConfig = {
          method:"GET",
          url: "/students",
          params: {
            page: 0,
            size: 30
          },
        }
    
        setIsLoading(true); // antes da requisição, está carregando
        requestBackend(params) // função criada no requests.ts
          .then(response => {
            setPage(response.data);
          })
          .finally(() => {
            setIsLoading(false); // terminou a requisição, isLoading = false
          });
      }, []);

    return(
        <>
        <div className="container my-4 catalog-container">

          <div className="row catalog-title-container">
            <h1>All Students</h1>
          </div>

            <div className="row">
              
              {isLoading ? <CardLoader/> : ( // se o isLoading for verdadeiro, carregando, se for falso, o restante
                page?.content.map(student => (
                  <div className="col-sm-6 col-lg-4 col-xl-3 students-column" key={student.id}>
                    <Link to="/student/1">
                      <StudentCard student={student} />
                    </Link>
                  </div>
                )
              ))}

            </div>


        </div>
        
      </>
    );
}

export default Students;