
import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
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

    const getStudents = (pageNumber : number) => {
      const params : AxiosRequestConfig = {
        method:"GET",
        url: "/students",
        params: {
          page: pageNumber,
          size: 8
        },
      }
  
      setIsLoading(true); // antes da requisição, está carregando
      requestBackend(params) // função criada no requests.ts
        .then(response => {
          setPage(response.data);
          window.scrollTo(0, 0);
        })
        .finally(() => {
          setIsLoading(false); // terminou a requisição, isLoading = false
        });
    }

    useEffect(() => {
      getStudents(0);
    }, []);

    return(
        <>
        <div className="container my-4 catalog-container">

          <div className="catalog-title-container">
            <h1>All Students from 3º1 class</h1>
          </div>

            <div className="row">
              
              {isLoading ? <CardLoader/> : ( // se o isLoading for verdadeiro, carregando, se for falso, o restante
                page?.content.map(student => (
                  <div className="col-sm-6 col-lg-4 col-xl-3 students-column" key={student.id}>
                    <Link to={`/students/${student.id}`}>
                      <StudentCard student={student}/>
                    </Link>
                  </div>
                )
              ))}

            </div>

            <Pagination 
                pageCount={(page) ? page.totalPages : 0} 
                range={2}
                onChange={getStudents}
                />
        </div>
        
      </>
    );
}

export default Students;