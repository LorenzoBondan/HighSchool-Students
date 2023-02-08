import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Student } from 'types/student';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';


const Students = () => {
  const [page, setPage] = useState<SpringPage<Student>>();


  useEffect(() => {
    const params : AxiosRequestConfig = {
      url: '/students',
      withCredentials: true,
      params: {
        page: 0,
        size: 40,
      },
    };


    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);


  return (
    <div>
      {page?.content.map((item) => (
        <p key={item.id}>Name: {item.name}</p>
      ))}
    </div>
  );
};


export default Students;