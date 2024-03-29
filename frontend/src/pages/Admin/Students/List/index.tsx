import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import StudentFilter, { StudentFilterData } from 'components/StudentFilter';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Student } from 'types/student';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import StudentCrudCard from '../StudentCrudCard';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: StudentFilterData;
}

const List = () => {
  const [page, setPage] = useState<SpringPage<Student>>();

  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({activePage:0, filterData: { name: '', course: null },});

  const handlePageChange = (pageNumber : number) => {
    setControlComponentsData({activePage: pageNumber, filterData: controlComponentsData.filterData});
  }

  const getStudents = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/students",
      params: {
        page: controlComponentsData.activePage,
        size: 6,

        name: controlComponentsData.filterData.name,
        courseId: controlComponentsData.filterData.course?.id
      },
    }

    requestBackend(params)
      .then(response => {
        setPage(response.data);
      });
  }, [controlComponentsData])

  useEffect(() => {
    getStudents();
  }, [getStudents]);

  const handleSubmitFilter = (data : StudentFilterData) => {
    setControlComponentsData({activePage: 0, filterData: data});
   }

  return (
    <div className='students-crud-container'>
        <div className="student-crud-bar-container">
            <Link to="/admin/students/create">
                <button className="btn btn-primary btn-crud-add">
                    ADD
                </button>
            </Link>
            <div className='students-crud-bar-filter-container'>
                <StudentFilter onSubmitFilter={handleSubmitFilter} />
            </div>
        </div>
        <div className='row'>
            {page?.content
              .sort((a,b) => a.name > b.name ? 1 : -1)
              .map((item) => (
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" key={item.id}>
                    <StudentCrudCard student={item} onDelete={() => getStudents()} key={item.id}/>
                </div>
            ))}
        </div>
        <Pagination 
            pageCount = {(page) ? page.totalPages : 0} 
            range = {3}
            onChange = {handlePageChange}
            forcePage={page?.number}
        />
    </div>
  );
};

export default List;