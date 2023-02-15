
import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import StudentCard from 'components/StudentCard';
import StudentFilter, { StudentFilterData } from 'components/StudentFilter';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Student } from 'types/student';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import CardLoader from './CardLoader';
import { FaUsers } from 'react-icons/fa';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: StudentFilterData;
}

function Students(){

    const [page, setPage] = useState<SpringPage<Student>>();
    const [isLoading, setIsLoading] = useState(false);

    //manter o estado de todos os componentes que fazem a listagem
    const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({activePage:0, filterData: { name: '', course: null },});

    const handlePageChange = (pageNumber : number) => {
      setControlComponentsData({activePage: pageNumber, filterData: controlComponentsData.filterData});
      //mantém o que está no filtro e muda só a página
    }

    const getStudents = useCallback(() => {
      const params : AxiosRequestConfig = {
        method:"GET",
        url: "/students",
        params: {
          page: controlComponentsData.activePage,
          size: 8,

          name: controlComponentsData.filterData.name,
          courseId: controlComponentsData.filterData.course?.id
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
    }, [controlComponentsData])

    useEffect(() => {
      getStudents();
    }, [getStudents]);

    
    // função do componente ProductFilter
    const handleSubmitFilter = (data : StudentFilterData) => {
      setControlComponentsData({activePage: 0, filterData: data});
      // efetua o filtro e volta pra primeira página
    }

    return(
        <>
        <div className="container my-4 catalog-container">

          <div className="catalog-title-container">
            <div className='students-page-logo'>
              <FaUsers/>
            </div>

            <div className='students-search-bar-container'>
              <StudentFilter onSubmitFilter={handleSubmitFilter} />
            </div>
            
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
                onChange={handlePageChange}
                forcePage={page?.number}
                />
        </div>
        
      </>
    );
}

export default Students;

