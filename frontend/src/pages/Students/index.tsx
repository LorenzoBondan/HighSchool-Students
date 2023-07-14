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

    const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({activePage:0, filterData: { name: '', course: null },});

    const handlePageChange = (pageNumber : number) => {
      setControlComponentsData({activePage: pageNumber, filterData: controlComponentsData.filterData});
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
  
      setIsLoading(true);
      requestBackend(params) 
        .then(response => {
          setPage(response.data);
          window.scrollTo(0, 0);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [controlComponentsData])

    useEffect(() => {
      getStudents();
    }, [getStudents]);

    const handleSubmitFilter = (data : StudentFilterData) => {
      setControlComponentsData({activePage: 0, filterData: data});
    }

    return(
        <div className="container my-4 catalog-container">
          <div className="catalog-title-container">
            <div className='students-page-logo'>
              <FaUsers style={{borderRadius:"50%", border:"2px solid silver", marginRight:"10px", background:"white", padding:"5px", height:"65px", width:"65px"}} />
            </div>
            <div className='students-search-bar-container'>
              <StudentFilter onSubmitFilter={handleSubmitFilter} />
            </div>
          </div>
            <div className="row">
              {isLoading ? <CardLoader/> : (
                page?.content
                  .sort((a,b) => a.name > b.name ? 1 : -1)
                  .map(student => (
                    <div className="col-sm-6 col-lg-4 col-xl-3 students-column" key={student.id}>
                      <Link to={`/students/${student.id}`}>
                        <StudentCard student={student}/>
                      </Link>
                    </div>
                    )
                  )
                )
              }
            </div>
            <Pagination 
              pageCount={(page) ? page.totalPages : 0} 
              range={2}
              onChange={handlePageChange}
              forcePage={page?.number}
            />
        </div>
    );
}

export default Students;

