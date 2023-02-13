import { AxiosRequestConfig } from 'axios';
import { StudentFilterData } from 'components/StudentFilter';
import { useCallback, useEffect, useState } from 'react';
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


  return (
    <div className='students-crud-container'>

      <div className='row'>

      {page?.content.map((item) => (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <StudentCrudCard student={item} onDelete={() => getStudents()} key={item.id}/>
        </div>
      ))}

      </div>
      
        
      
    </div>
  );
};


export default List;