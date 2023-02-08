import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Course } from 'types/course';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';


const Courses = () => {
  const [page, setPage] = useState<SpringPage<Course>>();


  useEffect(() => {
    const params : AxiosRequestConfig = {
      url: '/courses',
      withCredentials: true,
      params: {
        page: 0,
        size: 30,
      },
    };


    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);


  return (
    <div>
      {page?.content.map((item) => (
        <p key={item.id}>Course: {item.name}, Area: {item.area}</p>
      ))}
    </div>
  );
};


export default Courses;